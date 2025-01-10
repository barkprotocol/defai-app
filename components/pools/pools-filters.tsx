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

export function PoolsFilters() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8 p-4 bg-background/50 backdrop-blur-sm rounded-lg">
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="outline" className="rounded-full hover:bg-primary/10 transition-colors cursor-pointer">All Pools</Badge>
        <Badge variant="outline" className="rounded-full hover:bg-primary/10 transition-colors cursor-pointer">Raydium</Badge>
        <Badge variant="outline" className="rounded-full hover:bg-primary/10 transition-colors cursor-pointer">Orca</Badge>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Select defaultValue="tvl">
          <SelectTrigger className="w-[180px] bg-background/50 backdrop-blur-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tvl">TVL: High to Low</SelectItem>
            <SelectItem value="apy">APY: High to Low</SelectItem>
            <SelectItem value="volume">Volume: High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="bg-background/50 backdrop-blur-sm">Filters</Button>
      </div>
    </div>
  );
}