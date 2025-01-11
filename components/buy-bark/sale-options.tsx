"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Rocket, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { BuyTokenModal } from "@/components/token/buy-token-modal";

const options = [
  {
    title: "Public Sale",
    description: "Instant token access with no vesting period",
    price: "$0.00001",
    features: [
      "Immediate token access",
      "No vesting period",
      "Full platform benefits",
      "Instant staking eligibility",
    ],
    icon: Rocket,
    badge: "Popular",
    badgeVariant: "default" as const,
  },
  {
    title: "Strategic Sale",
    description: "50% discount with 1-year vesting period",
    price: "$0.0000025",
    features: [
      "50% price discount",
      "1-year linear vesting",
      "Early adopter benefits",
      "Higher staking rewards",
    ],
    icon: Lock,
    badge: "Best Value",
    badgeVariant: "secondary" as const,
  },
];

export function SaleOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {options.map((option) => (
        <Card
          key={option.title}
          className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:text-white ${
            selectedOption === option.title ? "ring-2 ring-primary" : ""
          } bg-white text-gray-950 shadow-md rounded-lg`}
          onClick={() => setSelectedOption(option.title)}
        >
          <div className="absolute top-4 right-4">
            <Badge variant={option.badgeVariant} className="bg-black text-white">
              {option.badge}
            </Badge>
          </div>
          <CardContent className="p-8">
            <option.icon className="h-10 w-10 text-[#dbcfc7] mb-6" />
            <h3 className="text-2xl font-bold mb-2 text-gray-950 dark:text-white">
              {option.title}
            </h3>
            <p className="text-muted-foreground mb-4">{option.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-950 dark:text-white">
                {option.price}
              </span>
              <span className="text-muted-foreground"> per BARK</span>
            </div>
            <ul className="space-y-3 mb-6">
              {option.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-gray-950 dark:text-gray-200"
                >
                  <Shield className="h-4 w-4 text-[#dbcfc7]" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-black text-white"
              size="lg"
              onClick={() => setIsBuyModalOpen(true)}
              variant={option.title === "Strategic Sale" ? "outline" : "default"}
            >
              {option.title === "Strategic Sale" ? (
                <>
                  <Clock className="mr-2 h-4 w-4 text-[#dbcfc7]" />
                  Join with Vesting
                </>
              ) : (
                <>
                  <Rocket className="mr-2 h-4 w-4 text-[#dbcfc7]" />
                  Buy Instantly
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      ))}

      <BuyTokenModal isOpen={isBuyModalOpen} onClose={() => setIsBuyModalOpen(false)} />
    </div>
  );
}
