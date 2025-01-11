"use client";

import { Button } from "@/components/ui/button";
import { Plus, RefreshCw, Download } from "lucide-react";
import Link from "next/link";

export function UserActions() {
  return (
    <div className="flex items-center space-x-3 flex-wrap md:flex-nowrap">
      <Link href="/pools" aria-label="Add a new liquidity pool">
        <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
          <Plus className="h-4 w-4 mr-2" />
          Add Pool
        </Button>
      </Link>
      <Button 
        variant="outline" 
        aria-label="Rebalance your liquidity pools" 
        className="border-gray-600 text-gray-600 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        <RefreshCw className="h-4 w-4 mr-2" />
        Rebalance
      </Button>
      <Button 
        variant="outline" 
        aria-label="Export your pool data" 
        className="border-gray-600 text-gray-600 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
      >
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
    </div>
  );
}
