"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, LineChart, Wallet, Timer } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  {
    title: "Total BARK Holdings",
    value: 1000,
    icon: Coins,
    change: 12.5,
    trend: "up",
    prefix: "",
    suffix: " BARK",
  },
  {
    title: "Portfolio Value",
    value: 25000,
    icon: Wallet,
    change: 8.3,
    trend: "up",
    prefix: "$",
    suffix: "",
  },
  {
    title: "Average APY",
    value: 14.5,
    icon: LineChart,
    change: 2.1,
    trend: "up",
    prefix: "",
    suffix: "%",
  },
  {
    title: "Time Invested",
    value: 45,
    icon: Timer,
    change: 0,
    trend: "neutral",
    prefix: "",
    suffix: " days",
  },
];

interface AnimatedValueProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedValue({ value, prefix = "", suffix = "", duration = 2000 }: AnimatedValueProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const step = value / (duration / 16);
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
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {current.toFixed(2)}
      {suffix}
    </span>
  );
}

export function UserMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title}
          className="transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fade-in 0.5s ease-out forwards",
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedValue 
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            </div>
            {metric.trend !== "neutral" && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {metric.trend === "up" ? "+" : "-"}{metric.change}%
                </span>
                from last month
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}