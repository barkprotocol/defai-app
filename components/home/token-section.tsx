"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Lock, Users, Shield, Vote, Zap, Percent } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';
import Link from "next/link";

interface TokenMetric {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
}

interface TokenUtility {
  title: string;
  description: string;
  icon: LucideIcon;
}

const baseSupply = 18190670416n;

const tokenMetrics: TokenMetric[] = [
  {
    title: "Current Supply",
    value: `${baseSupply.toLocaleString()} BARK`,
    icon: Coins,
    description: "Total fixed supply with no inflationary adjustments."
  },
  {
    title: "Public Sale",
    value: "45%",
    icon: Users,
    description: "45% of the token supply is available for public sale, offering a fair distribution."
  },
  {
    title: "Platform Development",
    value: "20%",
    icon: Zap,
    description: "20% of the token supply allocated to funding platform development and growth."
  },
  {
    title: "Team",
    value: "15%",
    icon: Shield,
    description: "15% of the token supply is locked for the team to ensure long-term commitment."
  }
];

const tokenUtility: TokenUtility[] = [
  {
    title: "Staking Rewards",
    description: "Earn passive rewards by staking your BARK tokens to support the platform.",
    icon: Percent,
  },
  {
    title: "Governance Rights",
    description: "Gain governance rights and participate in crucial platform decisions.",
    icon: Vote,
  },
  {
    title: "Fee Discounts",
    description: "Enjoy reduced fees across the platform when holding BARK tokens.",
    icon: Coins,
  },
  {
    title: "Premium Features",
    description: "Unlock exclusive tools and analytics designed for advanced users.",
    icon: Lock,
  }
];

interface TokenUtilityCardProps extends TokenUtility {
  index: number;
  inView: boolean;
}

function TokenUtilityCard({ title, description, icon: Icon, index, inView }: TokenUtilityCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-700 transform bg-white dark:bg-gray-800",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <CardContent className="relative p-6">
        <div className="mb-4 bg-[#DBCFC7]/20 w-12 h-12 rounded-xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-[#DBCFC7]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}

export function TokenSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 relative overflow-hidden bg-gray-100 dark:bg-gray-950" id="token">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-950" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-950 dark:text-white">BARK Token</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Fueling the future of automated liquidity management and DeFi growth.
          </p>
        </div>

        {/* Token Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenMetrics.map((metric) => (
            <Card key={metric.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="mb-4 bg-[#DBCFC7]/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-[#DBCFC7]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Token Utility Section */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenUtility.map((utility, index) => (
            <TokenUtilityCard
              key={utility.title}
              {...utility}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Public Sale and Strategic Sale */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Public Sale Card */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Public Sale</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$0.00001 per BARK</p>
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  Immediate token access
                </li>
                <li className="flex items-center">
                  <Coins className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  No vesting period
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  Full platform benefits
                </li>
              </ul>
              <Link href="/buy-bark" className="block w-full">
                <Button className="w-full bg-[#DBCFC7] text-gray-900 hover:bg-[#A69B8D] dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" size="lg">
                  Buy BARK Tokens
                </Button>
              </Link>
            </Card>

            {/* Strategic Sale Card */}
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Strategic Sale</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-4">$0.000025 per BARK</p>
              <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  1-year vesting period
                </li>
                <li className="flex items-center">
                  <Percent className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  50% price discount
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-[#DBCFC7]" />
                  Early adopter benefits
                </li>
              </ul>
              <Link href="/buy-bark" className="block w-full">
                <Button className="w-full bg-gray-200 text-gray-950 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600" size="lg" variant="outline">
                  Join Strategic Sale
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
