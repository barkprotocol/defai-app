"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-xl text-muted-foreground">
            Access the best liquidity pools across multiple Solana DEXes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.name} className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-muted-foreground mb-8">{platform.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="text-2xl font-bold">
                      ${(platform.stats.tvl / 1000000).toFixed(1)}M
                    </p>
                    <p className="text-sm text-muted-foreground">Total TVL</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{platform.stats.pools}</p>
                    <p className="text-sm text-muted-foreground">Active Pools</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-500">
                      {platform.stats.avgApy.toFixed(1)}%
                    </p>
                    <p className="text-sm text-muted-foreground">Avg. APY</p>
                  </div>
                </div>
                <Link href={`/pools#${platform.name.toLowerCase()}`}>
                  <Button className="w-full bg-gray-700 text-white hover:bg-gray-600">
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
