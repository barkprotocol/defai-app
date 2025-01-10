"use client";

import { PoolsOverview } from "@/components/pools/pools-overview";
import { PoolsHeader } from "@/components/pools/pools-header";
import { PoolsFilters } from "@/components/pools/pools-filters";

export default function PoolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <PoolsHeader />
        <PoolsFilters />
        <PoolsOverview />
      </main>
    </div>
  );
}