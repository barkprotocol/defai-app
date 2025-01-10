"use client";

import { PlatformSection } from "./platform-section";
import { ORCA_POOLS } from "@/lib/constants/orca";
import { RAYDIUM_POOLS } from "@/lib/constants/raydium";

export function PoolsOverview() {
  return (
    <div className="space-y-8">
      <PlatformSection 
        title="Raydium Pools" 
        platform="raydium" 
        pools={RAYDIUM_POOLS} 
      />
      <PlatformSection 
        title="Orca Pools" 
        platform="orca" 
        pools={ORCA_POOLS} 
      />
    </div>
  );
}