"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function SaleHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
      {/* Badge Section */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Badge variant="secondary" className="py-1.5">Public Sale Live</Badge>
        <Badge variant="outline" className="py-1.5">
          <Clock className="mr-2 h-4 w-4" />
          Strategic Sale Available
        </Badge>
      </div>
      
      {/* Title Section */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-gray-950 bg-gray-100">
        Join the Future of DeFi
      </h1>
      
      {/* Description Section */}
      <p className="text-xl text-muted-foreground mb-8">
        Choose between instant token access or strategic vesting with a 50% discount. 
        Be part of BARK Protocol's journey in revolutionizing automated liquidity management on Solana.
      </p>
      
      {/* Buttons Section */}
      <div className="flex items-center justify-center gap-4">
        <Link href="#calculator">
          <Button
            size="lg"
            className="gap-2 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Calculate Tokens <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        
        <Link href="https://docs.barkprotocol.net/tokenomics" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg">Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
