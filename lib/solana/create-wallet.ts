import { createWallet, Wallet } from "./wallet";
import { PublicKey } from "@solana/web3.js";

// Example 1: Create and use Phantom wallet
const phantomWallet: Wallet = createWallet("phantom", new PublicKey("YourPublicKeyHere"));
console.log("Phantom Wallet Public Key:", phantomWallet.publicKey.toBase58());

// Example 2: Create and use Keypair wallet (for testing)
const keypairWallet: Wallet = createWallet("keypair");
console.log("Keypair Wallet Public Key:", keypairWallet.publicKey.toBase58());

// Example 3: Create and use Custom wallet
const customWallet: Wallet = createWallet("custom", new PublicKey("YourPublicKeyHere"));
console.log("Custom Wallet Public Key:", customWallet.publicKey.toBase58());
