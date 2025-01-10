"use client";

import { Button } from "@/components/ui/button";
import { Leaf, ArrowDown, Heart, DollarSign } from "lucide-react";

export function TreePlantingHero() {
  const scrollToForm = () => {
    const form = document.getElementById("tree-planting-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-primary/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Environmental Impact Initiative</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Plant Trees, Save Our Planet
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join BARK Protocol in our mission to combat climate change. Every tree planted helps reduce carbon emissions, restore ecosystems, and create a sustainable future for generations to come.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="rounded-full bg-primary text-white hover:bg-primary/80 transition-all duration-300"
          >
            Make an Impact <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SocialFinanceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Social Finance for Good</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Empower communities through Social Finance. BARK Protocol integrates financial tools that generate returns while funding eco-friendly initiatives.
        </p>
        <div className="flex justify-center gap-6">
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
            <DollarSign className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Investments</h3>
            <p>Invest in projects that balance returns with positive social and environmental impact.</p>
          </div>
          <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
            <Heart className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
            <p>Funding local eco-projects that uplift communities while fostering global environmental change.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CharitySection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 to-transparent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Give Back to the Planet</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join the movement of charity-driven investments. Support global reforestation efforts with every transaction.
        </p>
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          size="lg"
          className="rounded-full bg-primary text-white hover:bg-primary/80 transition-all duration-300"
        >
          Donate Now <Heart className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

