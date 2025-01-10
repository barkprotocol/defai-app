"use client";

import { TreePlantingHero } from "@/components/plant-tree/hero";
import { TreePlantingForm } from "@/components/plant-tree/form";
import { TreeImpact } from "@/components/plant-tree/impact";
import { ParticleSystem } from "@/components/background/particle-system";

export default function PlantTreePage() {
  return (
    <div className="min-h-screen bg-background">
      <ParticleSystem />
      <main className="relative z-10">
        <TreePlantingHero />
        <TreeImpact />
        <TreePlantingForm />
      </main>
    </div>
  );
}