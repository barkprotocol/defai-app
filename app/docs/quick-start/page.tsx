"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuickStartPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Quick Start Guide</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Step 1: Connect Your Wallet</h2>
              <p>Click the "Connect Wallet" button in the top navigation bar to connect your Solana wallet.</p>
              <Button className="my-4 w-full max-w-xs mx-auto">Connect Wallet</Button>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Step 2: Explore Pools</h2>
              <p>Browse available liquidity pools on the Pools page. You can filter by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Platform (Orca/Raydium)</li>
                <li>APY range</li>
                <li>Risk level</li>
                <li>Token pairs</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Step 3: Add Liquidity</h2>
              <p>Select a pool and add liquidity:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Choose your investment amount</li>
                <li>Review pool details and risks</li>
                <li>Confirm transaction</li>
                <li>Monitor your position</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Step 4: Monitor & Manage</h2>
              <p>Use the Dashboard to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Track performance</li>
                <li>View earnings</li>
                <li>Manage positions</li>
                <li>Set up automated strategies</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/introduction" className="text-primary hover:underline">
                  ← Back to Introduction
                </Link>
                <Link href="/docs/connect-wallet" className="text-primary hover:underline">
                  Continue to Wallet Connection →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
