"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const pools = [
  {
    name: "SOL/USDC",
    apy: 8.3,
    liquidity: 1000000,
    risk: "Medium",
    volume: { data: [4, 6, 8, 5, 7, 9, 8], current: 8 },
  },
  {
    name: "ETH/USDC",
    apy: 12.5,
    liquidity: 2500000,
    risk: "High",
    volume: { data: [6, 8, 7, 9, 8, 10, 11], current: 11 },
  },
  {
    name: "BTC/USDC",
    apy: 10.1,
    liquidity: 3000000,
    risk: "High",
    volume: { data: [5, 7, 6, 8, 7, 9, 8], current: 8 },
  },
  {
    name: "USDC/USDT",
    apy: 4.2,
    liquidity: 5000000,
    risk: "Low",
    volume: { data: [3, 4, 3, 5, 4, 6, 5], current: 5 },
  },
  {
    name: "SOL/BARK",
    apy: 4.2,
    liquidity: 15000000,
    risk: "medium",
    volume: { data: [3, 4, 3, 5, 4, 6, 5], current: 5 },
  },
];

interface MiniChartProps {
  data: number[];
}

function MiniChart({ data }: MiniChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  return (
    <div className="flex items-end h-8 gap-0.5">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-1 bg-primary/20 rounded-t transition-all duration-500"
          style={{
            height: `${((value - min) / range) * 100}%`,
            animationDelay: `${i * 100}ms`,
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
}

function AnimatedNumber({ value, prefix = "" }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const step = value / 100;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setCurrent(current);
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {prefix === "$" ? current.toLocaleString(undefined, { maximumFractionDigits: 0 }) : current.toFixed(1)}
    </span>
  );
}

export function PoolsList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Liquidity Pools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pools.map((pool, index) => (
            <div
              key={pool.name}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fade-in 0.5s ease-out forwards",
              }}
            >
              <div className="space-y-1">
                <h3 className="font-semibold">{pool.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Liquidity: <AnimatedNumber value={pool.liquidity} prefix="$" />
                </p>
                <div className="w-24">
                  <MiniChart data={pool.volume.data} />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={
                  pool.risk === "Low" ? "secondary" :
                  pool.risk === "Medium" ? "default" : "destructive"
                }
                className="animate-pulse">
                  {pool.risk}
                </Badge>
                <div className="text-right">
                  <div className="font-semibold">
                    <AnimatedNumber value={pool.apy} />%
                  </div>
                  <div className="text-sm text-muted-foreground">APY</div>
                </div>
                <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}