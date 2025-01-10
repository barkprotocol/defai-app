import { PublicKey } from "@solana/web3.js";

// Define available payment tokens with their respective mint addresses and labels
export const PAYMENT_TOKENS = {
  "1": {
    mint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
    label: "USDT"
  },
  "2": {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    label: "USDC"
  },
  "3": {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    label: "SOL"
  },
  "4": {
    mint: new PublicKey("2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo"),
    label: "PayPal USD"
  }
} as const;  // Ensures the type is narrow and fixed

// Define TypeScript interface for a Token type
export interface TokenType {
  mint: PublicKey;  // Token mint address (PublicKey from @solana/web3.js)
  label: string;    // Token label (e.g., "USDT", "USDC")
}
