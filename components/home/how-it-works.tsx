"use client";

import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight, Wallet, Search, Coins, BarChart3 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    step: "1",
    title: "Connect Your Wallet",
    description:
      "Start by securely connecting your Solana wallet to begin using BARK's services. It's quick and easy!",
    icon: Wallet,
  },
  {
    step: "2",
    title: "Select Liquidity Pools",
    description:
      "Choose from curated liquidity pools across Orca and Raydium based on your investment strategy and risk appetite.",
    icon: Search,
  },
  {
    step: "3",
    title: "Earn Passive Rewards",
    description:
      "Once you've selected your pools, you'll start earning rewards and fees automatically, all managed for you.",
    icon: Coins,
  },
  {
    step: "4",
    title: "Track Performance",
    description:
      "Monitor your portfolio's progress in real-time, with detailed analytics to track your rewards and growth.",
    icon: BarChart3,
  },
];

interface StepCardProps extends Step {
  index: number;
  inView: boolean;
}

function StepCard({
  step,
  title,
  description,
  icon: Icon,
  index,
  inView,
}: StepCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-700 transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        "flex flex-col justify-between min-h-[320px] w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative p-6 space-y-4 flex flex-col justify-between">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-[#DBCFC7]/20 rounded-full">
            <Icon className="w-6 h-6 text-[#DBCFC7]" />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Step {step}
            </span>
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{description}</p>
        {index < steps.length - 1 && (
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <ArrowRight className="w-8 h-8 text-[#DBCFC7]/30" />
          </div>
        )}
      </div>
    </Card>
  );
}

export function HowItWorks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="py-24 relative overflow-hidden bg-gray-100 dark:bg-gray-950"
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How BARK Finance Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover how easy it is to manage liquidity and earn rewards with BARK Finance. Four simple steps to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.step} {...step} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
