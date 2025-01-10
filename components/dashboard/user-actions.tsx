"use client";

import { Button } from "@/components/ui/button";
import { Plus, RefreshCw, Download } from "lucide-react";
import Link from "next/link";

export function UserActions() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/pools">
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          <Plus className="h-4 w-4 mr-2" />
          Add Pool
        </Button>
      </Link>
      <Button variant="outline">
        <RefreshCw className="h-4 w-4 mr-2" />
        Rebalance
      </Button>
      <Button variant="outline">
        <Download className="h-4 w-4 mr-2" />
        Export
      </Button>
    </div>
  );
}
