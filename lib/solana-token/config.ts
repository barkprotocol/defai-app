import { PublicKey } from "@solana/web3.js";

export const CONFIG = {
  BARK_MINT: new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"),
  OWNER_INITIALIZE_WALLET: new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo"),
  OWNER_TOKEN_RECEIVE_WALLET: new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo"),
  COMMITMENT: "confirmed" as const,  // Transaction confirmation level
  MIN_AMOUNT: 0.0001,  // Minimum token amount for transactions
  DECIMALS: 9,  // Number of decimal places (Solana standard is 9 decimals)
  CURRENT_SUPPLY: 18_190_670_416.27 * 1_000_000_000,  // Current supply in smallest units (9 decimals)
};
