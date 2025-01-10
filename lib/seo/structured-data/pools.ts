export const getPoolStructuredData = (pool: any) => ({
  "@context": "https://schema.org",
  "@type": "Investment",
  "name": `${pool.name} Pool on ${pool.platform}`,
  "description": pool.description,
  "investmentType": "Liquidity Pool",
  "risk": pool.risk,
  "yield": {
    "@type": "MonetaryAmount",
    "value": pool.apy,
    "currency": "USD"
  }
});