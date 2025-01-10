"use client";

import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight, Wallet, Search, Coins, BarChart3 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const steps: Step[] = [
  {
    step: "1",
    title: "Connect Your Wallet",
    description:
      "Start by securely connecting your Solana wallet to begin using BARK's services. It's quick and easy!",
    icon: Wallet,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent",
  },
  {
    step: "2",
    title: "Select Liquidity Pools",
    description:
      "Choose from curated liquidity pools across Orca and Raydium based on your investment strategy and risk appetite.",
    icon: Search,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent",
  },
  {
    step: "3",
    title: "Earn Passive Rewards",
    description:
      "Once you've selected your pools, you’ll start earning rewards and fees automatically, all managed for you.",
    icon: Coins,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent",
  },
  {
    step: "4",
    title: "Track Performance",
    description:
      "Monitor your portfolio’s progress in real-time, with detailed analytics to track your rewards and growth.",
    icon: BarChart3,
    gradient: "from-gray-500/10 via-gray-400/5 to-transparent",
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
  gradient,
  index,
  inView,
}: StepCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-700 transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        "flex flex-col justify-between min-h-[320px] w-full"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
          gradient
        )}
      />
      <div className="relative p-6 space-y-4 flex flex-col justify-between">
        <div className="flex items-center gap-4 mb-4">
          <div>
            <Icon className="w-8 h-8 text-[#DBCFC7]" />
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Step {step}</span>
            <h3 className="text-xl font-semibold text-[#DBCFC7]">{title}</h3>
          </div>
        </div>
        <p className="text-gray-500 leading-relaxed mb-4">{description}</p>
        {index < steps.length - 1 && (
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <ArrowRight className="w-8 h-8 text-gray-500/30" />
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
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            How BARK Finance Works
          </h2>
          <p className="text-xl text-gray-500">
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
