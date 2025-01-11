"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, Timer, Users, Shield } from "lucide-react";
import { SALE_END_DATE } from "@/lib/constants/sale";

const stats = [
  {
    icon: Coins,
    label: "Token Price",
    value: "$0.00001",
    description: "Fixed price throughout sale"
  },
  {
    icon: Timer,
    label: "Time Left",
    value: "calculateTimeLeft()",
    description: "Until sale ends",
    animate: true
  },
  {
    icon: Users,
    label: "Participants",
    value: "5,234+",
    description: "Active contributors"
  },
  {
    icon: Shield,
    label: "Audited By",
    value: "OtterSec",
    description: "Security verified"
  }
];

function calculateTimeLeft() {
  const now = new Date();
  const diff = SALE_END_DATE.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return `${days}d ${hours}h`;
}

export function SaleStats() {
  const [formattedParticipants, setFormattedParticipants] = useState<string | null>(null);

  // Format the participants value on the client side
  useEffect(() => {
    setFormattedParticipants("1,234+"); // Example of a static number, you can replace this with dynamic data
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="hover:shadow-lg transition-all duration-300 dark:bg-gray-800 bg-white text-gray-950 dark:text-white"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-primary/20 flex items-center justify-center">
                <stat.icon
                  className={`w-6 h-6 text-[#dbcfc7] ${stat.animate ? 'animate-pulse' : ''}`}
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">
                  {stat.value === "calculateTimeLeft()"
                    ? calculateTimeLeft()
                    : stat.value === "1,234+"
                    ? formattedParticipants
                    : stat.value}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
