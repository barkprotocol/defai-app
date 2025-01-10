"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Wallet, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function DashboardHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 font-semibold text-xl">
            <div className="relative h-10 w-10">
              <Image
                src="https://ucarecdn.com/8aa0180d-1112-4aea-8210-55b266c3fb44/bark.png"
                alt="BARK Finance"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-xl">BARK</span>
            <span className="font-light text-xl">FINANCE</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              1234...5678
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
