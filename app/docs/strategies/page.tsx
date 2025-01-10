"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function StrategiesPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Investment Strategies</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Strategy Types</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conservative (Stable Pairs)</li>
                <li>Moderate (Mixed Exposure)</li>
                <li>Aggressive (High Yield)</li>
                <li>Custom Strategies</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Strategy Components</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Asset Allocation</li>
                <li>Risk Management</li>
                <li>Rebalancing Rules</li>
                <li>Exit Conditions</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Implementation Guide</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Strategy Selection</li>
                <li>Position Sizing</li>
                <li>Entry Timing</li>
                <li>Monitoring & Adjustment</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Techniques</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cross-platform Arbitrage</li>
                <li>Yield Farming Optimization</li>
                <li>Dynamic Range Management</li>
                <li>Protocol Incentive Maximization</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/yield" className="text-primary hover:underline">
                  ← Back to Yield Optimization
                </Link>
                <Link href="/docs/risk" className="text-primary hover:underline">
                  Continue to Risk Management →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
