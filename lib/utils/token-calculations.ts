import { PublicKey } from "@solana/web3.js";

// Prices for tokens in USD
export const PRICES = {
  BARK: 0.00001, // Price for BARK token (BARK)
  VESTING: 0.000025, // Example price for VESTING token
  USDT: 1, // Price for USDT (or any other token)
  USDC: 1, // Price for USDC
  SOL: 220,  // Example price for SOL token (1 SOL = $220 in this case)
  PAYPAL_USD: 1, // Price for PayPal USD (USD equivalent)
  // Add more prices as needed
};

// Configuration constants
export const CONFIG = {
  BARK_MINT: new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg"),
  OWNER_INITIALIZE_WALLET: new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo"),
  OWNER_TOKEN_RECEIVE_WALLET: new PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo"),
  COMMITMENT: "confirmed" as const,
  MIN_AMOUNT: "0.0001",
  DECIMALS: 9,
  CURRENT_SUPPLY: 18_190_670_416.27 * 1_000_000_000,  // Convert the current supply to the smallest unit (9 decimals)
};

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

// TypeScript interface for a Token type
export interface TokenType {
  mint: PublicKey;  // Token mint address (PublicKey from @solana/web3.js)
  label: string;    // Token label (e.g., "USDT", "USDC")
}

// Function to calculate the equivalent amount of a given token for a USD amount
export function calculateTokenAmount(usdAmount: number, token: keyof typeof PRICES): number {
  if (!(token in PRICES)) {
    throw new Error(`Invalid token: ${token}`);
  }

  const amount = usdAmount / PRICES[token];
  return token === 'SOL' ? amount * Math.pow(10, CONFIG.DECIMALS) : amount;
}

// Calculate the amount of BARK token for a given USD amount
export function calculateBarkAmount(usdAmount: number): number {
  return usdAmount / PRICES.BARK;
}

// Calculate the amount of VESTING token for a given USD amount
export function calculateVestingAmount(usdAmount: number): number {
  return usdAmount / PRICES.VESTING;
}

// Example of usage
const usdAmount = 100;  // Example USD amount

const barkAmount = calculateBarkAmount(usdAmount);
console.log(`Amount in BARK: ${barkAmount}`);  // Amount in BARK: 10000000

const vestingAmount = calculateVestingAmount(usdAmount);
console.log(`Amount in VESTING: ${vestingAmount}`);  // Amount in VESTING: 4000000

const solAmount = calculateTokenAmount(usdAmount, "SOL");
console.log(`Amount in SOL: ${solAmount}`);  // Amount in SOL: 0.45454545454545453
