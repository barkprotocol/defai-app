"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Risk Management</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Types of Risks</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Impermanent Loss</li>
                <li>Smart Contract Risk</li>
                <li>Market Risk</li>
                <li>Protocol Risk</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Risk Mitigation Strategies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Portfolio Diversification</li>
                <li>Position Sizing</li>
                <li>Stop-Loss Implementation</li>
                <li>Emergency Procedures</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Monitoring Tools</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Risk Metrics Dashboard</li>
                <li>Price Alerts</li>
                <li>Portfolio Analytics</li>
                <li>Performance Tracking</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular Portfolio Review</li>
                <li>Risk-Reward Analysis</li>
                <li>Contingency Planning</li>
                <li>Documentation</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/strategies" className="text-primary hover:underline">
                  ← Back to Investment Strategies
                </Link>
                <Link href="/docs/analytics" className="text-primary hover:underline">
                  Continue to Analytics & Reporting →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
