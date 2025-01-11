import { web3 } from '@solana/web3.js';

// Solana Network Configuration
export const SOLANA_NETWORK = "devnet";

// Contract Addresses
export const BARK_PROGRAM_ID = new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo");
export const BARK_MINT = new web3.PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg");
export const BARK_SALE_ACCOUNT = new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo");
export const BARK_SALE_TOKEN_ACCOUNT = new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo");

// Token Mint Addresses
export const TOKEN_MINTS = {
  USDT: new web3.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
  USDC: new web3.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  PAYPAL_USD: new web3.PublicKey("2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo")
};

// Owner Wallet Addresses
export const OWNER_ADDRESSES = {
  TOKEN_RECEIVE_WALLET: new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo"),
  INITIALIZE_WALLET: new web3.PublicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo")
};

// Prices for tokens in USD
export const PRICES = {
  BARK: 0.00001, // in USDC
  VESTING: 0.000004 // in USDC
};

// Network URL
export const CLUSTER_URL = web3.clusterApiUrl(SOLANA_NETWORK);

// Function to calculate token amount in USD
export function calculateTokenAmount(usdAmount: number, token: keyof typeof PRICES): number {
  return usdAmount / PRICES[token];
}

// Example calculation for BARK and VESTING tokens
const usdAmount = 100;  // Example USD amount

// Calculate BARK token amount
const barkAmount = calculateTokenAmount(usdAmount, "BARK");
console.log(`Amount in BARK: ${barkAmount}`);  // Amount in BARK: 10000000

// Calculate VESTING token amount
const vestingAmount = calculateTokenAmount(usdAmount, "VESTING");
console.log(`Amount in VESTING: ${vestingAmount}`);  // Amount in VESTING: 25000000

// Example function to calculate cost for a certain amount of BARK tokens
export function calculateBarkCost(barkAmount: number): number {
  return barkAmount * PRICES.BARK;
}

// Example usage of calculateBarkCost
const barkCost = calculateBarkCost(1000);  // Cost for 1000 BARK tokens
console.log(`Cost for 1000 BARK tokens: ${barkCost} USDC`);  // Cost for 1000 BARK tokens: 0.00001 USDC

