"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function PoolsFilters() {
  const [selectedPool, setSelectedPool] = useState<string>("all");
  const [selectedSort, setSelectedSort] = useState<string>("tvl");

  const handlePoolClick = (pool: string) => {
    setSelectedPool(pool);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8 p-4 bg-background/50 backdrop-blur-sm rounded-lg">
      <div className="flex items-center gap-2 flex-wrap">
        <Badge
          variant="outline"
          className={`rounded-full hover:bg-primary/10 transition-colors cursor-pointer ${selectedPool === "all" ? "bg-primary/10" : ""}`}
          onClick={() => handlePoolClick("all")}
        >
          All Pools
        </Badge>
        <Badge
          variant="outline"
          className={`rounded-full hover:bg-primary/10 transition-colors cursor-pointer ${selectedPool === "raydium" ? "bg-primary/10" : ""}`}
          onClick={() => handlePoolClick("raydium")}
        >
          Raydium
        </Badge>
        <Badge
          variant="outline"
          className={`rounded-full hover:bg-primary/10 transition-colors cursor-pointer ${selectedPool === "orca" ? "bg-primary/10" : ""}`}
          onClick={() => handlePoolClick("orca")}
        >
          Orca
        </Badge>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Select value={selectedSort} onValueChange={setSelectedSort}>
          <SelectTrigger className="w-[180px] bg-background/50 backdrop-blur-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tvl">TVL: High to Low</SelectItem>
            <SelectItem value="apy">APY: High to Low</SelectItem>
            <SelectItem value="volume">Volume: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="bg-background/50 backdrop-blur-sm">
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
