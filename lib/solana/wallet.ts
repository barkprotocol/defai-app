import { PublicKey, Keypair, Transaction, VersionedTransaction } from "@solana/web3.js";

export interface Wallet {
  publicKey: PublicKey;
  signTransaction<T>(tx: T): Promise<T>;
  signAllTransactions<T>(txs: T[]): Promise<T[]>;
}

export class PhantomWallet implements Wallet {
  publicKey: PublicKey;

  constructor(publicKey: PublicKey) {
    this.publicKey = publicKey;
  }

  async signTransaction<T>(tx: T): Promise<T> {
    // Implement signing logic for Phantom wallet
    console.log("Signing with Phantom...");
    return tx;
  }

  async signAllTransactions<T>(txs: T[]): Promise<T[]> {
    console.log("Signing multiple transactions with Phantom...");
    return txs;
  }
}

export class KeypairWallet implements Wallet {
  publicKey: PublicKey;
  private keypair: Keypair;

  constructor() {
    this.keypair = Keypair.generate();
    this.publicKey = this.keypair.publicKey;
  }

  async signTransaction<T>(tx: T): Promise<T> {
    console.log("Signing with Keypair...");
    if (tx instanceof Transaction) {
      tx.partialSign(this.keypair);
    } else if (tx instanceof VersionedTransaction) {
      // For VersionedTransaction, ensure proper signing method is called.
      const signature = await this.keypair.signMessage(tx.serializeMessage());
      tx.addSignature(this.keypair.publicKey, signature);
    }
    return tx;
  }

  async signAllTransactions<T>(txs: T[]): Promise<T[]> {
    console.log("Signing multiple transactions with Keypair...");
    txs.forEach((tx) => {
      if (tx instanceof Transaction) {
        tx.partialSign(this.keypair);
      } else if (tx instanceof VersionedTransaction) {
        const signature = this.keypair.signMessage(tx.serializeMessage());
        tx.addSignature(this.keypair.publicKey, signature);
      }
    });
    return txs;
  }
}

export class CustomWallet implements Wallet {
  publicKey: PublicKey;

  constructor(publicKey: PublicKey) {
    this.publicKey = publicKey;
  }

  async signTransaction<T>(tx: T): Promise<T> {
    console.log("Signing with Custom Wallet...");
    return tx;
  }

  async signAllTransactions<T>(txs: T[]): Promise<T[]> {
    console.log("Signing multiple transactions with Custom Wallet...");
    return txs;
  }
}

export function createWallet(type: "phantom" | "keypair" | "custom", publicKey?: PublicKey): Wallet {
  switch (type) {
    case "phantom":
      if (!publicKey) throw new Error("Public key is required for Phantom wallet.");
      return new PhantomWallet(publicKey);
    case "keypair":
      return new KeypairWallet();
    case "custom":
      if (!publicKey) throw new Error("Public key is required for Custom wallet.");
      return new CustomWallet(publicKey);
    default:
      throw new Error("Unsupported wallet type.");
  }
}
