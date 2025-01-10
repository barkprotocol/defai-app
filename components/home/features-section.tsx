"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, RefreshCw, LineChart } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />
      <CardContent className="relative p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <div className="mb-4 bg-black/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-black/5 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-black mb-6">Our Key Features</h2>
          <p className="text-xl text-muted-foreground">
            Advanced tools and features designed to maximize your DeFi earnings while minimizing risks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-black" />}
            title="User-Driven Selection"
            description="Choose from a variety of liquidity pools based on your risk tolerance and financial goals."
            gradient="bg-gradient-to-br from-gray-500/10 to-gray-700/10"
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-black" />}
            title="Automated Management"
            description="Let our platform handle complex liquidity management while you focus on earning."
            gradient="bg-gradient-to-br from-gray-500/10 to-gray-700/10"
          />
          <FeatureCard
            icon={<RefreshCw className="h-6 w-6 text-black" />}
            title="Loss Mitigation"
            description="Advanced strategies to reduce impermanent loss and protect your investments."
            gradient="bg-gradient-to-br from-gray-500/10 to-gray-700/10"
          />
          <FeatureCard
            icon={<LineChart className="h-6 w-6 text-black" />}
            title="Real-time Analytics"
            description="Monitor your investments with detailed analytics and performance metrics."
            gradient="bg-gradient-to-br from-gray-500/10 to-gray-700/10"
          />
        </div>
      </div>
    </section>
  );
}
