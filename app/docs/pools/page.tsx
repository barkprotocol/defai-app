"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PoolsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Managing Pools</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Understanding Pool Types</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stable Pools (USDC/USDT)</li>
                <li>BARK Pools (SOL/BARK)</li>
                <li>Volatile Pools (SOL/USDC)</li>
                <li>Exotic Pairs</li>
                <li>Concentrated Liquidity Pools</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Pool Selection Criteria</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trading Volume</li>
                <li>APY/APR</li>
                <li>Impermanent Loss Risk</li>
                <li>Token Fundamentals</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Position Management</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Adding Liquidity</li>
                <li>Removing Liquidity</li>
                <li>Rebalancing Positions</li>
                <li>Claiming Rewards</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Risk Management</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diversification Strategies</li>
                <li>Position Sizing</li>
                <li>Stop-Loss Settings</li>
                <li>Emergency Withdrawal</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/connect-wallet" className="text-primary hover:underline">
                  ← Back to Wallet Connection
                </Link>
                <Link href="/docs/rebalancing" className="text-primary hover:underline">
                  Continue to Automated Rebalancing →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
