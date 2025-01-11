import { web3 } from '@coral-xyz/anchor';

export const PROGRAM_ID = new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo");

export const TOKEN_MINTS = {
  BARK: new web3.PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"),
  USDT: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
  USDC: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // Using USDT mint for testing
  PAYPAL_USD: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"), // Using USDT mint for testing
  SOL: new web3.PublicKey("So11111111111111111111111111111111111111112") // SOL Mint Address
};

export const NETWORK = "devnet";
export const CLUSTER_URL = web3.clusterApiUrl(NETWORK);
