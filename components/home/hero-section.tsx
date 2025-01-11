import { Button } from "@/components/ui/button";
import { Wallet, LineChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StatsSection } from "./stats-section";
import DemoAnimationCard from "./demo-animation-card";
import clsx from "clsx";

interface HeroSectionProps {
  backgroundImage?: string;
}

export function HeroSection({ backgroundImage }: HeroSectionProps) {
  const bgClasses = clsx(
    "relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:from-gray-950",
    backgroundImage && "bg-cover bg-center"
  );

  return (
    <section className={bgClasses} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Public Sale Banner */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#DBCFC7]/20 rounded-full shadow-sm transition-all hover:bg-[#DBCFC7]/30">
            <div className="relative h-6 w-6">
              <Image
                src="https://ucarecdn.com/8aa0180d-1112-4aea-8210-55b266c3fb44/bark.png"
                alt="BARK FINANCE"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Public Sale Live</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 dark:text-white leading-tight drop-shadow-lg">
            Maximize Your DeFi Earnings with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DBCFC7] to-[#A69B8D]">BARK</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            An automated liquidity management platform for Solana DEXs. Optimize your yield across Orca, Raydium, and more with intelligent auto-rebalancing.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link href="/buy-bark">
              <Button size="lg" className="w-full sm:w-auto rounded-md h-14 text-white px-8 text-lg bg-black hover:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 group">
                <Wallet className="mr-2 h-6 w-6 transition-transform group-hover:scale-110" />
                Buy $BARK
              </Button>
            </Link>
            <Link href="/pools">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-md h-14 px-8 text-lg border-1 border-[#DBCFC7] hover:border-[#A69B8D] text-gray-900 dark:text-white hover:text-[#A69B8D] dark:hover:text-[#DBCFC7] shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <LineChart className="mr-2 h-6 w-6 transition-transform group-hover:scale-110 text-[#DBCFC7]" />
                Explore Pools
              </Button>
            </Link>
          </div>

          {/* Demo Card */}
          <div className="mb-16">
            <DemoAnimationCard />
          </div>

          {/* Stats Section */}
          <StatsSection />
        </div>
      </div>
    </section>
  );
}
