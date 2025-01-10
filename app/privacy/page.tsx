"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
              <p>We collect wallet addresses and transaction data to provide our services.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
              <p>Information is used to provide and improve our automated liquidity management services.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
              <p>We implement security measures to protect your information.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
              <p>We integrate with Solana DEXs and other blockchain services.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
              <p>Users have the right to access and delete their data.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates</h2>
              <p>This privacy policy may be updated periodically.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
