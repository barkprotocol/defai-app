import { ethers } from 'ethers';
import { WalletTransaction } from '../types';
import { logger } from '../utils/logger';
import { Connection, Keypair, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

export class WalletService {
  private wallet: ethers.Wallet;
  private provider: ethers.JsonRpcProvider;
  private solanaConnection: Connection;
  private solanaWallet: Keypair;

  constructor(privateKey: string, rpcUrl: string, solanaPrivateKey: string, solanaRpcUrl: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.wallet = new ethers.Wallet(privateKey, this.provider);

    this.solanaConnection = new Connection(solanaRpcUrl);
    this.solanaWallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(solanaPrivateKey)));
  }

  // Get Ethereum wallet balance
  async getBalance(): Promise<string> {
    try {
      const balance = await this.wallet.getBalance();
      logger.info(`ETH Balance for ${this.wallet.address}: ${ethers.formatEther(balance)} ETH`);
      return ethers.formatEther(balance);
    } catch (error) {
      logger.error('Error getting Ethereum wallet balance:', error);
      throw error;
    }
  }

  // Get Solana wallet balance
  async getSolanaBalance(): Promise<string> {
    try {
      const balance = await this.solanaConnection.getBalance(this.solanaWallet.publicKey);
      const solBalance = (balance / 10 ** 9).toFixed(9);
      logger.info(`SOL Balance for ${this.solanaWallet.publicKey.toBase58()}: ${solBalance} SOL`);
      return solBalance;
    } catch (error) {
      logger.error('Error getting Solana wallet balance:', error);
      throw error;
    }
  }

  // Send Ethereum transaction
  async sendETHTransaction(to: string, amount: string): Promise<WalletTransaction> {
    try {
      const valueInWei = ethers.parseEther(amount);
      logger.info(`Sending ${amount} ETH from ${this.wallet.address} to ${to}`);

      const tx = await this.wallet.sendTransaction({ to, value: valueInWei });
      const receipt = await tx.wait();

      const transaction: WalletTransaction = {
        id: tx.hash,
        from: this.wallet.address,
        to,
        amount,
        currency: 'ETH',
        timestamp: new Date(),
        status: receipt.status === 1 ? 'completed' : 'failed',
        txHash: tx.hash,
      };

      logger.info(`ETH Transaction ${tx.hash} completed with status: ${transaction.status}`);
      return transaction;
    } catch (error) {
      logger.error('Error sending ETH transaction:', error);
      throw error;
    }
  }

  // Send BARK token transaction
  async sendBARKTransaction(to: string, amount: string, barkTokenAddress: string): Promise<WalletTransaction> {
    try {
      const barkTokenContract = new ethers.Contract(
        barkTokenAddress,
        ['function transfer(address recipient, uint256 amount) public returns (bool)'],
        this.wallet
      );

      logger.info(`Sending ${amount} BARK tokens from ${this.wallet.address} to ${to}`);

      const valueInWei = ethers.parseEther(amount);
      const tx = await barkTokenContract.transfer(to, valueInWei);
      const receipt = await tx.wait();

      const transaction: WalletTransaction = {
        id: tx.hash,
        from: this.wallet.address,
        to,
        amount,
        currency: 'BARK',
        timestamp: new Date(),
        status: receipt.status === 1 ? 'completed' : 'failed',
        txHash: tx.hash,
      };

      logger.info(`BARK Transaction ${tx.hash} completed with status: ${transaction.status}`);
      return transaction;
    } catch (error) {
      logger.error('Error sending BARK token transaction:', error);
      throw error;
    }
  }

  // Send Solana transaction
  async sendSOLTransaction(to: string, amount: string): Promise<WalletTransaction> {
    try {
      const lamports = ethers.parseUnits(amount, 'wei').toBigInt();
      const recipientPublicKey = new PublicKey(to);

      logger.info(`Sending ${amount} SOL from ${this.solanaWallet.publicKey.toBase58()} to ${to}`);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: this.solanaWallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports,
        })
      );

      const txHash = await this.solanaConnection.sendTransaction(transaction, [this.solanaWallet]);
      const confirmation = await this.solanaConnection.confirmTransaction(txHash);

      const transactionStatus: WalletTransaction = {
        id: txHash,
        from: this.solanaWallet.publicKey.toBase58(),
        to,
        amount,
        currency: 'SOL',
        timestamp: new Date(),
        status: confirmation.value.err ? 'failed' : 'completed',
        txHash,
      };

      logger.info(`SOL Transaction ${txHash} completed with status: ${transactionStatus.status}`);
      return transactionStatus;
    } catch (error) {
      logger.error('Error sending SOL transaction:', error);
      throw error;
    }
  }

  // Get transaction status
  async getTransactionStatus(txHash: string, currency: 'ETH' | 'SOL' | 'BARK'): Promise<'pending' | 'completed' | 'failed'> {
    try {
      if (currency === 'ETH' || currency === 'BARK') {
        const tx = await this.provider.getTransaction(txHash);
        if (!tx) {
          logger.warn(`Transaction ${txHash} not found.`);
          return 'failed';
        }
        const receipt = await tx.wait();
        return receipt.status === 1 ? 'completed' : 'failed';
      } else if (currency === 'SOL') {
        const status = await this.solanaConnection.getTransaction(txHash);
        return status ? 'completed' : 'failed';
      } else {
        return 'failed';
      }
    } catch (error) {
      logger.error('Error getting transaction status:', error);
      throw error;
    }
  }

  // Get the Ethereum wallet address
  getAddress(): string {
    return this.wallet.address;
  }
}
