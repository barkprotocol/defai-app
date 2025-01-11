"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wallet, BarChart2, Percent } from 'lucide-react';
import Link from "next/link";
import { ORCA_POOLS } from "@/lib/constants/orca";
import { RAYDIUM_POOLS } from "@/lib/constants/raydium";

const platforms = [
  {
    name: "Raydium",
    description: "Leading AMM on Solana with deep liquidity and competitive yields",
    stats: {
      tvl: RAYDIUM_POOLS.reduce((acc, pool) => acc + pool.tvl, 0),
      pools: RAYDIUM_POOLS.length,
      avgApy: RAYDIUM_POOLS.reduce((acc, pool) => acc + pool.apy, 0) / RAYDIUM_POOLS.length,
    },
  },
  {
    name: "Orca",
    description: "User-friendly DEX known for fair tokenomics and stable returns",
    stats: {
      tvl: ORCA_POOLS.reduce((acc, pool) => acc + pool.tvl, 0),
      pools: ORCA_POOLS.length,
      avgApy: ORCA_POOLS.reduce((acc, pool) => acc + pool.apy, 0) / ORCA_POOLS.length,
    },
  },
];

export function PlatformsOverview() {
  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Supported Platforms</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Access the best liquidity pools across multiple Solana DEXes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.name} className="overflow-hidden bg-white dark:bg-gray-800 transition-shadow duration-500 hover:shadow-xl transform hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{platform.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{platform.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Wallet className="w-6 h-6 mb-2 text-[#DBCFC7]" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${(platform.stats.tvl / 1000000).toFixed(1)}M
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Total TVL</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <BarChart2 className="w-6 h-6 mb-2 text-[#DBCFC7]" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{platform.stats.pools}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Active Pools</p>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Percent className="w-6 h-6 mb-2 text-[#DBCFC7]" />
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {platform.stats.avgApy.toFixed(1)}%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Avg. APY</p>
                  </div>
                </div>
                <Link href={`/pools#${platform.name.toLowerCase()}`} className="block w-full">
                  <Button className="w-full bg-[#DBCFC7] text-gray-900 hover:bg-[#A69B8D] dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300">
                    View {platform.name} Pools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
