"use client";

import { UserMetrics } from "@/components/dashboard/user-metrics";
import { UserPools } from "@/components/dashboard/user-pools";
import { UserPerformance } from "@/components/dashboard/user-performance";
import { UserActions } from "@/components/dashboard/user-actions";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-muted-foreground">Manage your investments and track performance</p>
          </div>
          <UserActions />
        </div>

        <UserMetrics />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <UserPerformance />
          <UserPools />
        </div>
      </main>
    </div>
  );
}
