"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";

interface OrcaPoolCardProps {
  pool: {
    name: string;
    platform: string;
    tvl: number;
    apy: number;
    volume24h: number;
    tokens: string[];
    risk: string;
    description: string;
    features: string[];
  };
}

export function OrcaPoolCard({ pool }: OrcaPoolCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {pool.tokens.map((token, i) => (
                <div 
                  key={token}
                  className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-medium"
                  style={{ zIndex: pool.tokens.length - i }}
                >
                  {token.slice(0, 1)}
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold">{pool.name}</h3>
              <p className="text-sm text-muted-foreground">{pool.platform}</p>
            </div>
          </div>
          <Badge variant={pool.risk === "High" ? "destructive" : "secondary"}>
            {pool.risk}
          </Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">TVL</p>
            <p className="font-semibold">${(pool.tvl / 1000000).toFixed(1)}M</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">APY</p>
            <p className="font-semibold text-green-500">{pool.apy}%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">24h Volume</p>
            <p className="font-semibold">${(pool.volume24h / 1000000).toFixed(1)}M</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{pool.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {pool.features.map((feature) => (
            <Badge key={feature} variant="outline">{feature}</Badge>
          ))}
        </div>
        <Link href={`/pools/orca/${pool.name.toLowerCase()}`}>
          <Button className="w-full" variant={isHovered ? "default" : "outline"}>
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}