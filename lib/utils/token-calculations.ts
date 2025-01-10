export const PRICES = {
  BARK: 0.00001, // Price for BARK token (BARK)
  VESTING: 0.000025, // Example price for VESTING token
  USDT: 1, // Price for USDT (or any other token)
  USDC: 1, // Price for USDC
  SOL: 220,  // Example price for SOL token (1 SOL = $220 in this case)
  PAYPAL_USD: 1, // Price for PayPal USD (USD equivalent)
  // Add more prices as needed
};

export function calculateTokenAmount(usdAmount: number, token: keyof typeof PRICES): number {
  return usdAmount / PRICES[token];
}

export function calculateBarkAmount(usdAmount: number): number {
  return usdAmount / PRICES.BARK;
}

export function calculateVestingAmount(usdAmount: number): number {
  return usdAmount / PRICES.VESTING;
}

// Example of usage
const usdAmount = 100;  // Example USD amount

const barkAmount = calculateBarkAmount(usdAmount);
console.log(`Amount in BARK: ${barkAmount}`);

const vestingAmount = calculateVestingAmount(usdAmount);
console.log(`Amount in VESTING: ${vestingAmount}`);

const solAmount = calculateTokenAmount(usdAmount, "SOL");
console.log(`Amount in SOL: ${solAmount}`);
