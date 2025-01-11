export const ORCA_POOLS = [
  {
    name: "SOL-USDT",
    platform: "Orca",
    tvl: 18_000_000,
    apy: 11.8,
    volume24h: 900_000,
    tokens: ["SOL", "USDT"],
    risk: "Medium",
    description: "High-liquidity SOL/USDT pool on Orca",
    features: ["Low slippage", "High volume", "Stable pair"],
  },
  {
    name: "BTC-USDC",
    platform: "Orca",
    tvl: 22_000_000,
    apy: 14.5,
    volume24h: 1_800_000,
    tokens: ["BTC", "USDC"],
    risk: "High",
    description: "Deep liquidity BTC/USDC pool with competitive yields",
    features: ["High APY", "Large trades", "Popular pair"],
  },
  {
    name: "BARK-USDC",
    platform: "Orca",
    tvl: 10_000_000, // Example value, can be adjusted based on real data
    apy: 13.0, // Example value, can be adjusted based on real data
    volume24h: 500_000, // Example value, can be adjusted based on real data
    tokens: ["BARK", "USDC"],
    risk: "Medium", // Can adjust based on real risk level
    description: "BARK token and USDC pool on Orca with good liquidity",
    features: ["Stable returns", "Medium liquidity", "Community-backed"],
  },
  {
    name: "SOL-BARK",
    platform: "Orca",
    tvl: 5_000_000, // Example value, adjust based on real data
    apy: 15.0, // Example value, adjust based on real data
    volume24h: 250_000, // Example value, adjust based on real data
    tokens: ["SOL", "BARK"],
    risk: "Medium", // Adjust based on real risk level
    description: "SOL and BARK token pool on Orca with medium liquidity",
    features: ["Emerging pool", "Community-focused", "Potential for growth"],
  },
];
