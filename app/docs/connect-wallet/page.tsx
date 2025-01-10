"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ConnectWalletPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Connecting Your Wallet</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Supported Wallets</h2>
              <p>BARK Protocol supports the following Solana wallets:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Phantom</li>
                <li>SolFlare</li>
                <li>Backpack</li>
                <li>Sollet</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Connection Steps</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Click "Connect Wallet" in the navigation bar</li>
                <li>Select your preferred wallet</li>
                <li>Approve the connection request</li>
                <li>Grant necessary permissions</li>
              </ol>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Security Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Always verify the website URL</li>
                <li>Never share your private keys</li>
                <li>Review transaction details carefully</li>
                <li>Keep your wallet software updated</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Troubleshooting</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure your wallet is unlocked</li>
                <li>Check your browser permissions</li>
                <li>Clear browser cache if issues persist</li>
                <li>Contact support for additional help</li>
              </ul>

              <div className="mt-8 flex gap-4">
                <Link href="/docs/quick-start" className="text-primary hover:underline">
                  ← Back to Quick Start
                </Link>
                <Link href="/docs/pools" className="text-primary hover:underline">
                  Continue to Managing Pools →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
