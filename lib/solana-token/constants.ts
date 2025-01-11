import { PublicKey } from "@solana/web3.js";

// Define TypeScript interface for a Token type
export interface TokenType {
  mint: PublicKey;  // Token mint address (PublicKey from @solana/web3.js)
  label: string;    // Token label (e.g., "USDT", "USDC")
}

// Define available payment tokens with their respective mint addresses and labels
export const PAYMENT_TOKENS: Record<string, TokenType> = {
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
};

// Example utility function to get a token by its ID
export const getTokenById = (id: string): TokenType | undefined => {
  return PAYMENT_TOKENS[id];
};

// Example utility function to get all token labels
export const getTokenLabels = (): string[] => {
  return Object.values(PAYMENT_TOKENS).map((token) => token.label);
};
