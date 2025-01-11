import { web3 } from '@coral-xyz/anchor';

// Define the Program ID for the smart contract
export const PROGRAM_ID = new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo");

// Define the mint addresses for various tokens used in the application
export const TOKEN_MINTS = {
  BARK: new web3.PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"), // BARK token mint address
  USDT: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // USDT token mint address
  USDC: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // Using USDT mint for USDC in testing
  PAYPAL_USD: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // Using USDT mint for PayPal USD in testing
  SOL: new web3.PublicKey("So11111111111111111111111111111111111111112") // SOL mint address
};

// Network configuration
export const NETWORK = "devnet"; // Solana Devnet
export const CLUSTER_URL = web3.clusterApiUrl(NETWORK); // Cluster URL for Devnet
