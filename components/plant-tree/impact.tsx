"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Cloud, Droplets, Bird } from "lucide-react";

const impacts = [
  {
    icon: TreePine,
    title: "Climate Action",
    value: "1",
    unit: "ton CO₂",
    description: "Each tree absorbs ~1 ton of CO₂ over its lifetime"
  },
  {
    icon: Cloud,
    title: "Air Purification",
    value: "100+",
    unit: "lbs/year",
    description: "Of air pollutants filtered per tree"
  },
  {
    icon: Droplets,
    title: "Soil Protection",
    value: "90%",
    unit: "reduction",
    description: "In soil erosion and water runoff"
  },
  {
    icon: Bird,
    title: "Biodiversity",
    value: "30+",
    unit: "species",
    description: "Of wildlife supported by each tree"
  }
];

export function TreeImpact() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Trees Matter</h2>
          <p className="text-xl text-muted-foreground">
            Trees are vital for our planet's health. Each tree we plant together creates a lasting positive impact on our environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact) => (
            <Card
              key={impact.title}
              className="hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  {/* Ensure icons are rendered directly */}
                  {React.createElement(impact.icon, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-2xl font-bold mb-1">{impact.value}</h3>
                <p className="text-sm text-muted-foreground mb-2">{impact.unit}</p>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
