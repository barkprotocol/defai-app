"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Documentation</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <ul className="space-y-2">
                  <li><Link href="/docs/introduction" className="text-primary hover:underline">Introduction</Link></li>
                  <li><Link href="/docs/quick-start" className="text-primary hover:underline">Quick Start Guide</Link></li>
                  <li><Link href="/docs/connect-wallet" className="text-primary hover:underline">Connecting Your Wallet</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
                <ul className="space-y-2">
                  <li><Link href="/docs/pools" className="text-primary hover:underline">Managing Pools</Link></li>
                  <li><Link href="/docs/rebalancing" className="text-primary hover:underline">Automated Rebalancing</Link></li>
                  <li><Link href="/docs/yield" className="text-primary hover:underline">Yield Optimization</Link></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Advanced Topics</h2>
                <ul className="space-y-2">
                  <li><Link href="/docs/strategies" className="text-primary hover:underline">Investment Strategies</Link></li>
                  <li><Link href="/docs/risk" className="text-primary hover:underline">Risk Management</Link></li>
                  <li><Link href="/docs/analytics" className="text-primary hover:underline">Analytics & Reporting</Link></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
