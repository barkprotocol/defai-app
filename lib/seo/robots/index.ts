import { MetadataRoute } from 'next';

export function generateRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/*.json$',
        '/*.xml$'
      ],
    },
    sitemap: 'https://bark.finance/sitemap.xml',
  };
}