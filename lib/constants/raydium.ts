export const RAYDIUM_POOLS = [
  {
    name: "SOL-USDC",
    platform: "Raydium",
    tvl: 25_000_000, // Total Value Locked (TVL) in the pool
    apy: 12.5, // Annual Percentage Yield (APY) in percentage
    volume24h: 1_500_000, // 24-hour trading volume
    tokens: ["SOL", "USDC"], // Tokens involved in the pool
    risk: "Medium", // Risk level of the pool
    description: "Premier SOL/USDC pool on Raydium",
    features: ["High liquidity", "Low fees", "Stable returns"], // Key features of the pool
  },
  {
    name: "ETH-USDC",
    platform: "Raydium",
    tvl: 15_000_000,
    apy: 15.2,
    volume24h: 1_200_000,
    tokens: ["ETH", "USDC"],
    risk: "Medium",
    description: "Popular ETH/USDC pool with consistent performance",
    features: ["Cross-chain", "High volume", "Competitive APY"],
  },
  {
    name: "SOL-BARK",
    platform: "Raydium",
    tvl: 10_000_000, // Example value, adjust based on real data
    apy: 18.4, // Example value, adjust based on real data
    volume24h: 800_000, // Example value, adjust based on real data
    tokens: ["SOL", "BARK"], // SOL and BARK tokens
    risk: "High", // Set risk level based on pool characteristics
    description: "SOL/BARK pool offering exposure to SOL and BARK tokens",
    features: ["High growth potential", "Token diversification", "Attractive APY"],
  },
];
