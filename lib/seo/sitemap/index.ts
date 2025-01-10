import { MetadataRoute } from 'next';
import { ORCA_POOLS } from '@/lib/constants/orca';
import { RAYDIUM_POOLS } from '@/lib/constants/raydium';

export function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bark.finance';
  const currentDate = new Date();

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pools`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // Add Orca pool routes
  ORCA_POOLS.forEach(pool => {
    routes.push({
      url: `${baseUrl}/pools/orca/${pool.name.toLowerCase()}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    });
  });

  // Add Raydium pool routes
  RAYDIUM_POOLS.forEach(pool => {
    routes.push({
      url: `${baseUrl}/pools/raydium/${pool.name.toLowerCase()}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.6,
    });
  });

  return routes;
}