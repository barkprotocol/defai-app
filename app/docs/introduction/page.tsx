"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Introduction to BARK Finance</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">What is BARK Finance?</h2>
              <p>BARK Finance is a professional automated liquidity management platform built for Solana DeFi. Our platform enables users to optimize their liquidity positions across multiple DEXs while minimizing risks and maximizing returns.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated liquidity management across Orca and Raydium</li>
                <li>Smart rebalancing strategies to minimize impermanent loss</li>
                <li>Real-time performance tracking and analytics</li>
                <li>Professional-grade portfolio management tools</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
              <p>To begin using BARK Finance:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Connect your Solana wallet</li>
                <li>Browse available liquidity pools</li>
                <li>Select your investment strategy</li>
                <li>Monitor and manage your positions</li>
              </ol>

              <div className="mt-8">
                <Link href="/docs/quick-start" className="text-primary hover:underline">
                  Continue to Quick Start Guide →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
