"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RebalancingPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Automated Rebalancing</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">What is Rebalancing?</h2>
              <p>Rebalancing is the process of adjusting your liquidity positions to maintain optimal ratios and maximize returns while minimizing risks.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Rebalancing Strategies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Time-based Rebalancing</li>
                <li>Threshold-based Rebalancing</li>
                <li>Dynamic Range Adjustment</li>
                <li>Cross-pool Optimization</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Up Automated Rebalancing</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Choose a Strategy</li>
                <li>Set Parameters</li>
                <li>Define Triggers</li>
                <li>Monitor Performance</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom Rebalancing Rules</li>
                <li>Gas Optimization</li>
                <li>Slippage Protection</li>
                <li>Emergency Stops</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/pools" className="text-primary hover:underline">
                  ← Back to Managing Pools
                </Link>
                <Link href="/docs/yield" className="text-primary hover:underline">
                  Continue to Yield Optimization →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}