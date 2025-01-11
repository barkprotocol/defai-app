"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Percent, CoinsIcon } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  {
    title: "Total Value Locked",
    value: 12345.67,
    icon: DollarSign,
    change: 12.5,
    trend: "up",
  },
  {
    title: "Total APY",
    value: 8.3,
    icon: Percent,
    change: 2.1,
    trend: "up",
  },
  {
    title: "Earned Fees",
    value: 345.12,
    icon: CoinsIcon,
    change: 45.23,
    trend: "up",
  },
  {
    title: "Portfolio Growth",
    value: 23.5,
    icon: TrendingUp,
    change: 5.2,
    trend: "up",
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

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title}
          className="transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: "fade-in 0.5s ease-out forwards",
          }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-[#dbcfc7] animate-pulse" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <AnimatedValue 
                value={metric.value} 
                prefix={metric.title.includes("Value") || metric.title.includes("Fees") ? "$" : ""}
                suffix={metric.title.includes("APY") || metric.title.includes("Growth") ? "%" : ""}
              />
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span 
                className={`flex items-center ${
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                <TrendingUp className={`h-3 w-3 ${
                  metric.trend === "up" ? "rotate-0" : "rotate-180"
                } transition-transform`} />
                {metric.title.includes("Value") || metric.title.includes("Fees") ? "$" : ""}
                {metric.change}
                {metric.title.includes("APY") || metric.title.includes("Growth") ? "%" : ""}
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
