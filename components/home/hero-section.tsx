"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Wallet, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  backgroundImage?: string;
}

function DemoAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
      <div className="w-[400px] h-[400px] bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-200/30">
        <div className="relative h-full">
          <div className={`absolute inset-0 transition-opacity duration-500 ${step === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold mb-4">Deposit</h3>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${step === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold mb-4">Auto-Rebalance</h3>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${step === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold mb-4">Earn Yields</h3>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${step === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-lg font-semibold mb-4">Monitor</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }
    : {};

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white"
      style={bgStyle}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-gray-900/10 rounded-full">
            <div className="relative h-6 w-6">
              <Image
                src="https://ucarecdn.com/8aa0180d-1112-4aea-8210-55b266c3fb44/bark.png"
                alt="BARK FINANCE"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-900">
              Public Sale Live
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Maximize Your DeFi Earnings with BARK
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            An automated liquidity management platform for Solana DEXs. 
            Optimize your yield across Orca, Raydium, and more with intelligent auto-rebalancing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/buy-bark">
              <Button size="lg" className="w-full sm:w-auto rounded-md h-12 text-white px-8 text-lg bg-gray-900 hover:bg-gray-900/90 group">
                <Wallet className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Buy $BARK
              </Button>
            </Link>
            <Link href="/pools">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-md h-12 px-8 text-lg group">
                <LineChart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 text-[#DBCFC7]" />
                Explore Pools
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <Link href="/dashboard" className="group">
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-500/50 transition-all duration-300">
                <LayoutDashboard className="h-6 w-6 mb-2 text-[#DBCFC7] group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">Your Dashboard</h3>
                <p className="text-sm text-gray-600">Monitor and manage your investments in one place.</p>
              </div>
            </Link>
            <Link href="/pools" className="group">
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-500/50 transition-all duration-300">
                <LineChart className="h-6 w-6 mb-2 text-[#DBCFC7] group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">Active Pools</h3>
                <p className="text-sm text-gray-600">Explore high-performance liquidity pools.</p>
              </div>
            </Link>
            <Link href="/buy-bark" className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-500/50 transition-all duration-300">
                <Wallet className="h-6 w-6 mb-2 text-[#DBCFC7] group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold">BARK Token</h3>
                <p className="text-sm text-gray-600">View token details and learn more.</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-gray-500">$100M+</h3>
              <p className="text-gray-600">Total Value Locked (TVL)</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-500">15+</h3>
              <p className="text-gray-600">Supported Pools</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-500">24/7</h3>
              <p className="text-gray-600">Automated Liquidity Management</p>
            </div>
          </div>
        </div>
      </div>
      <DemoAnimation />
    </section>
  );
}
