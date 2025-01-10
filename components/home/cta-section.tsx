"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join the public sale and be part of Solana's leading liquidity management platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/buy-bark">
            <Button variant="secondary" size="lg" className="rounded-md">
              Buy BARK Tokens <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href="/plant-tree">
            <Button variant="outline" size="lg" className="rounded-md bg-transparent border-white/20 hover:bg-white/10">
              <Leaf className="mr-2 h-4 w-4" />
              Plant a Tree
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button variant="outline" size="lg" className="rounded-md bg-transparent border-white/20 hover:bg-white/10">
              Launch Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
