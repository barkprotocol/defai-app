"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Lock, Users, Shield, Vote, Zap, Percent } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
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
  gradient: string;
}

const baseSupply = 18190670416.27; // Example of a base supply value
const tokenMetrics: TokenMetric[] = [
  {
    title: "Current Supply",
    value: `${baseSupply.toLocaleString()} BARK`, // Dynamically show the base supply value
    icon: Coins,
    description: "Fixed supply, no inflation"
  },
  {
    title: "Public Sale",
    value: "45%",
    icon: Users,
    description: "500M tokens for public"
  },
  {
    title: "Platform Development",
    value: "20%",
    icon: Zap,
    description: "200M tokens allocated"
  },
  {
    title: "Team",
    value: "15%",
    icon: Shield,
    description: "150M tokens locked"
  }
];

const tokenUtility: TokenUtility[] = [
  {
    title: "Staking Rewards",
    description: "Earn passive income by staking BARK tokens",
    icon: Percent,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent"
  },
  {
    title: "Governance Rights",
    description: "Vote on platform upgrades and pool additions",
    icon: Vote,
    gradient: "from-gray-600/10 via-gray-500/5 to-transparent"
  },
  {
    title: "Fee Discounts",
    description: "Reduced platform fees for token holders",
    icon: Coins,
    gradient: "from-gray-400/10 via-gray-300/5 to-transparent"
  },
  {
    title: "Premium Features",
    description: "Access advanced tools and analytics",
    icon: Lock,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent"
  }
];

interface TokenUtilityCardProps extends TokenUtility {
  index: number;
  inView: boolean;
}

function TokenUtilityCard({ title, description, icon: Icon, gradient, index, inView }: TokenUtilityCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-700 transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
        gradient
      )} />
      <div className="absolute inset-0 bg-[url('/path-to-your-icon.svg')] opacity-20" style={{ backgroundColor: '#dbcfc7' }} />
      <CardContent className="relative p-6">
        <div className="mb-4 bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-gray-200" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
    <section className="py-24 relative overflow-hidden" id="token">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-gray-500/5 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">BARK Token</h2>
          <p className="text-xl text-gray-600">
            Power the future of automated liquidity management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tokenMetrics.map((metric) => (
            <Card key={metric.title} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/path-to-your-icon.svg')] opacity-15" style={{ backgroundColor: '#dbcfc7' }} />
              <CardContent className="p-6">
                <div className="mb-4 bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-gray-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{metric.title}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-2">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

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

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Public Sale</h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">$0.00001 per BARK</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-gray-800" />
                  Immediate token access
                </li>
                <li className="flex items-center">
                  <Coins className="h-4 w-4 mr-2 text-gray-800" />
                  No vesting period
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-gray-800" />
                  Full platform benefits
                </li>
              </ul>
              <Link href="/buy-bark">
                <Button className="w-full bg-gray-700 text-white hover:bg-gray-800" size="lg">
                  Buy BARK Tokens
                </Button>
              </Link>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Strategic Sale</h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">$0.000025 per BARK</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li className="flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-gray-800" />
                  1-year vesting period
                </li>
                <li className="flex items-center">
                  <Percent className="h-4 w-4 mr-2 text-gray-800" />
                  50% price discount
                </li>
                <li className="flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-gray-800" />
                  Early adopter benefits
                </li>
              </ul>
              <Link href="/buy-bark">
                <Button className="w-full bg-gray-700 text-white hover:bg-gray-800" size="lg" variant="outline">
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
