"use client";

import { PlatformSection } from "./platform-section";
import { ORCA_POOLS } from "@/lib/constants/orca";
import { RAYDIUM_POOLS } from "@/lib/constants/raydium";
import { useState, useEffect } from "react";

export function PoolsOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate fetching pools data with a delay (replace with actual fetch logic)
    setTimeout(() => {
      // Example error handling for fetching pools data
      // setHasError(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p>Loading pools...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex justify-center items-center py-10">
        <p>Error loading pools. Please try again later.</p>
      </div>
    );
  }

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
