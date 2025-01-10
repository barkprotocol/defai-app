export const getPlatformStructuredData = (platform: any) => ({
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": `${platform.name} Integration`,
  "description": platform.description,
  "provider": {
    "@type": "Organization",
    "name": platform.name,
    "url": platform.url
  },
  "featureList": platform.features,
  "termsOfService": `https://bark.finance/terms/${platform.name.toLowerCase()}`
});