import {
    Connection,
    PublicKey,
    Signer,
    Transaction,
    TransactionSignature,
    ConfirmOptions,
    Commitment,
    SendOptions,
    VersionedTransaction,
    VersionedMessage,
  } from "@solana/web3.js";
  import { Wallet } from "./wallet";
  
  /**
   * The provider interface for interacting with the Solana network.
   */
  export interface Provider {
    readonly connection: Connection;
    readonly publicKey?: PublicKey;
    send?(tx: Transaction | VersionedTransaction, signers?: Signer[], opts?: SendOptions): Promise<TransactionSignature>;
    sendAndConfirm?(tx: Transaction | VersionedTransaction, signers?: Signer[], opts?: ConfirmOptions): Promise<TransactionSignature>;
    sendAll?<T extends Transaction | VersionedTransaction>(txWithSigners: {
      tx: T;
      signers?: Signer[];
    }[], opts?: ConfirmOptions): Promise<Array<TransactionSignature>>;
    simulate?(tx: Transaction | VersionedTransaction, signers?: Signer[], commitment?: Commitment, includeAccounts?: boolean | PublicKey[]): Promise<any>;
  }
  
  /**
   * A Solana provider using the Anchor framework.
   */
  export class AnchorProvider implements Provider {
    readonly connection: Connection;
    readonly wallet: Wallet;
    readonly opts: ConfirmOptions;
    readonly publicKey: PublicKey;
  
    /**
     * @param connection The cluster connection where the program is deployed.
     * @param wallet     The wallet used to pay for and sign all transactions.
     * @param opts       Transaction confirmation options to use by default.
     */
    constructor(connection: Connection, wallet: Wallet, opts: ConfirmOptions = AnchorProvider.defaultOptions()) {
      this.connection = connection;
      this.wallet = wallet;
      this.opts = opts;
      this.publicKey = wallet.publicKey;
    }
  
    /**
     * Returns default transaction confirmation options.
     */
    static defaultOptions(): ConfirmOptions {
      return {
        commitment: "processed", // Can be adjusted to "confirmed" or "finalized"
        preflightCommitment: "processed", // Optional, to specify the preflight commitment level
      };
    }
  
    /**
     * Sends a transaction, paid for and signed by the provider's wallet.
     */
    async sendAndConfirm(
      tx: Transaction | VersionedTransaction,
      signers: Signer[] = [],
      opts: ConfirmOptions = this.opts
    ): Promise<TransactionSignature> {
      try {
        // Check if the transaction is VersionedTransaction or Transaction
        if (tx instanceof Transaction) {
          // Send and confirm a regular Transaction
          const txSignature = await this.connection.sendTransaction(tx, signers, opts);
          await this.connection.confirmTransaction(txSignature, opts);
          return txSignature;
        } else if (tx instanceof VersionedTransaction) {
          // Send and confirm a VersionedTransaction
          const txSignature = await this.connection.sendTransaction(tx, signers, opts);
          await this.connection.confirmTransaction(txSignature, opts);
          return txSignature;
        } else {
          throw new Error("Unsupported transaction type.");
        }
      } catch (error) {
        console.error('Error sending and confirming transaction:', error);
        throw error;
      }
    }
  
    /**
     * Similar to sendAndConfirm but for multiple transactions.
     */
    async sendAll<T extends Transaction | VersionedTransaction>(
      txWithSigners: { tx: T; signers?: Signer[] }[],
      opts: ConfirmOptions = this.opts
    ): Promise<TransactionSignature[]> {
      try {
        const txSignatures = await Promise.all(
          txWithSigners.map(async ({ tx, signers }) => {
            // Check if the transaction is VersionedTransaction or Transaction
            if (tx instanceof Transaction) {
              const txSignature = await this.connection.sendTransaction(tx, signers, opts);
              await this.connection.confirmTransaction(txSignature, opts);
              return txSignature;
            } else if (tx instanceof VersionedTransaction) {
              const txSignature = await this.connection.sendTransaction(tx, signers, opts);
              await this.connection.confirmTransaction(txSignature, opts);
              return txSignature;
            } else {
              throw new Error("Unsupported transaction type.");
            }
          })
        );
        return txSignatures;
      } catch (error) {
        console.error('Error sending multiple transactions:', error);
        throw error;
      }
    }
  
    /**
     * Simulates a transaction to check for errors.
     */
    async simulate(
      tx: Transaction | VersionedTransaction,
      signers: Signer[] = [],
      commitment?: Commitment,
      includeAccounts?: boolean | PublicKey[]
    ): Promise<any> {
      try {
        // Check if the transaction is VersionedTransaction or Transaction
        if (tx instanceof Transaction) {
          const simulationResult = await this.connection.simulateTransaction(tx, signers, {
            commitment,
            includeAccounts,
          });
          return simulationResult;
        } else if (tx instanceof VersionedTransaction) {
          const simulationResult = await this.connection.simulateTransaction(tx, signers, {
            commitment,
            includeAccounts,
          });
          return simulationResult;
        } else {
          throw new Error("Unsupported transaction type.");
        }
      } catch (error) {
        console.error('Error simulating transaction:', error);
        throw error;
      }
    }
  }
  
  /**
   * A simple wallet interface used by the AnchorProvider.
   */
  export interface Wallet {
    signTransaction<T extends Transaction | VersionedTransaction>(tx: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(txs: T[]): Promise<T[]>;
    publicKey: PublicKey;
  }
  
  /**
   * Set the default provider to be used.
   */
  let currentProvider: Provider;
  
  export function setProvider(provider: Provider): void {
    currentProvider = provider;
  }
  
  /**
   * Returns the current provider.
   */
  export function getProvider(): Provider {
    if (!currentProvider) {
      throw new Error("Provider is not set.");
    }
    return currentProvider;
  }
  