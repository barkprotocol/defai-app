import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Layers, Clock } from "lucide-react";
import clsx from "clsx";

export function StatsSection() {
  const stats = [
    {
      value: "$100M+",
      label: "Total Value Locked (TVL)",
      icon: Banknote,
    },
    {
      value: "15+",
      label: "Supported Pools",
      icon: Layers,
    },
    {
      value: "24/7",
      label: "Automated Liquidity Management",
      icon: Clock,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white drop-shadow-lg">
          Key Stats
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Discover the key metrics that highlight the success and scale of our platform, showcasing the total value locked, number of supported pools, and 24/7 automated liquidity management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon; // destructure the icon
            return (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 rounded-lg"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#DBCFC7]/20 rounded-full">
                    <Icon className="h-8 w-8 text-[#DBCFC7]" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
