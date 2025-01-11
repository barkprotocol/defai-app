"use client";

import { OrcaPoolCard } from "./orca/pool-card";
import { RaydiumPoolCard } from "./raydium/pool-card";

interface Pool {
  name: string;
  // Add other pool-specific properties here, for example:
  tvl: number;
  apy: number;
  // Adjust to match the structure of your pool data
}

interface PlatformSectionProps {
  title: string;
  platform: "orca" | "raydium";
  pools: Pool[];
}

export function PlatformSection({ title, platform, pools }: PlatformSectionProps) {
  const PoolCard = platform === "orca" ? OrcaPoolCard : RaydiumPoolCard;

  if (pools.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p>No pools available for this platform.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pools.map((pool) => (
          <PoolCard key={pool.name} pool={pool} />
        ))}
      </div>
    </div>
  );
}
