"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, RefreshCw, LineChart } from "lucide-react";
import { classNames } from "classnames";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-950 rounded-lg">
      <CardContent className="relative p-8 space-y-4">
        <div className="mb-4 bg-[#DBCFC7]/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white drop-shadow-md">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-100 dark:bg-gray-950">
      <div className="absolute inset-0 bg-gray-100 to-transparent dark:bg-gray-950" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-950 dark:text-white mb-6 drop-shadow-lg">
            Our Key Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Advanced tools and features designed to maximize your DeFi earnings while minimizing risks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-[#DBCFC7]" />}
            title="User-Driven Selection"
            description="Choose from a variety of liquidity pools based on your risk tolerance and financial goals."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-[#DBCFC7]" />}
            title="Automated Management"
            description="Let our platform handle complex liquidity management while you focus on earning."
          />
          <FeatureCard
            icon={<RefreshCw className="h-6 w-6 text-[#DBCFC7]" />}
            title="Loss Mitigation"
            description="Advanced strategies to reduce impermanent loss and protect your investments."
          />
          <FeatureCard
            icon={<LineChart className="h-6 w-6 text-[#DBCFC7]" />}
            title="Real-time Analytics"
            description="Monitor your investments with detailed analytics and performance metrics."
          />
        </div>
      </div>
    </section>
  );
}
