export const getWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BARK Finance",
  "description": "Automated liquidity management platform for Solana DEXs",
  "url": "https://bark.finance",
  "applicationCategory": "DeFi",
  "operatingSystem": "Web-based",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Automated liquidity management",
    "Cross-DEX yield optimization",
    "Impermanent loss protection",
    "Real-time portfolio tracking"
  ]
});

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