"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function YieldPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Yield Optimization</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Understanding Yield Sources</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trading Fees</li>
                <li>Liquidity Mining Rewards</li>
                <li>Token Appreciation</li>
                <li>Protocol Incentives</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Optimization Strategies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Multi-pool Distribution</li>
                <li>APY Tracking</li>
                <li>Fee Tier Selection</li>
                <li>Reward Compounding</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Risk vs. Reward</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Volatility Assessment</li>
                <li>Impermanent Loss Calculation</li>
                <li>Risk-adjusted Returns</li>
                <li>Portfolio Correlation</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring & Adjustments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance Tracking</li>
                <li>Yield Comparison</li>
                <li>Strategy Adjustment</li>
                <li>Market Analysis</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/rebalancing" className="text-primary hover:underline">
                  ← Back to Automated Rebalancing
                </Link>
                <Link href="/docs/strategies" className="text-primary hover:underline">
                  Continue to Investment Strategies →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
