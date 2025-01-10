import { Connection, Keypair, PublicKey, Transaction, SystemProgram } from '@solana/web3.js';
import { logger } from '../utils/logger';

interface SolTransactionResult {
  id: string;
  from: string;
  to: string;
  amount: string;
  currency: 'SOL';
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
  txHash: string;
}

export class SendSolTransaction {
  private connection: Connection;
  private wallet: Keypair;

  constructor(privateKey: string, rpcUrl: string) {
    this.connection = new Connection(rpcUrl, 'confirmed');
    this.wallet = Keypair.fromSecretKey(new Uint8Array(JSON.parse(privateKey)));
  }

  /**
   * Sends SOL tokens from the wallet to a recipient.
   * @param to - The recipient's public key as a string.
   * @param amount - The amount of SOL to send as a string.
   * @returns SolTransactionResult with transaction details and status.
   */
  async send(to: string, amount: string): Promise<SolTransactionResult> {
    try {
      // Validate recipient address
      const recipientPublicKey = new PublicKey(to);

      // Convert SOL amount to lamports (1 SOL = 1e9 lamports)
      const lamports = BigInt(Number(amount) * 10 ** 9);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: this.wallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports,
        })
      );

      // Sign and send transaction
      const txHash = await this.connection.sendTransaction(transaction, [this.wallet]);

      // Confirm the transaction
      const confirmation = await this.connection.confirmTransaction(txHash, 'finalized');

      // Determine transaction status
      const status = confirmation.value.err ? 'failed' : 'completed';

      const result: SolTransactionResult = {
        id: txHash,
        from: this.wallet.publicKey.toBase58(),
        to,
        amount,
        currency: 'SOL',
        timestamp: new Date(),
        status,
        txHash,
      };

      logger.info(`Transaction ${txHash} sent successfully.`);
      return result;
    } catch (error) {
      logger.error(`Error sending SOL transaction to ${to}:`, error);
      throw new Error(`Transaction failed: ${error.message}`);
    }
  }
}
