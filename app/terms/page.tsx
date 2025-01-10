"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using BARK FINANCE ("the Platform"), you agree to be bound by these Terms of Service.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Platform Services</h2>
              <p>BARK FINANCE provides automated liquidity management services on the Solana blockchain.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
              <p>Users are responsible for maintaining the security of their wallets and private keys.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Risk Disclosure</h2>
              <p>Cryptocurrency investments involve significant risk. Users should carefully evaluate their financial situation.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
              <p>BARK FINAMCE is not responsible for any losses incurred while using the platform.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications</h2>
              <p>We reserve the right to modify these terms at any time.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
