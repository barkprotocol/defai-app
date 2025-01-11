"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function PoolsHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold">All Pools</h1>
        <p className="text-muted-foreground mt-1">Explore and invest in Solana's top liquidity pools</p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1 md:w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input 
            placeholder="Search pools..." 
            className="pl-10"
            autoComplete="off"
            spellCheck="false"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <Button aria-label="Connect wallet">Connect Wallet</Button>
      </div>
    </div>
  );
}
