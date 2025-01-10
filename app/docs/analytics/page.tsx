"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-screen-lg mx-auto border-primary/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-8">Analytics & Reporting</h1>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Total Value Locked (TVL)</li>
                <li>Returns (APY/APR)</li>
                <li>Impermanent Loss</li>
                <li>Fee Generation</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Portfolio Overview</li>
                <li>Historical Performance</li>
                <li>Risk Analysis</li>
                <li>Tax Reporting</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Visualization</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance Charts</li>
                <li>Pool Comparisons</li>
                <li>Risk Metrics</li>
                <li>Market Analysis</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Export Options</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>CSV Reports</li>
                <li>PDF Summaries</li>
                <li>API Integration</li>
                <li>Custom Reports</li>
              </ul>

              <div className="mt-8">
                <Link href="/docs/risk" className="text-primary hover:underline">
                  ← Back to Risk Management
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
