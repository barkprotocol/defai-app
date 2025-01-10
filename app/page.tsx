"use client";

import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { PlatformsOverview } from "@/components/home/platforms-overview";
import { TokenSection } from "@/components/home/token-section";
import { RoadmapSection } from "@/components/home/roadmap-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <header className="sticky top-0 z-50 bg-background shadow-lg">
      </header>
      <HeroSection />
      <FeaturesSection />
      <PlatformsOverview />
      <HowItWorks />
      <TokenSection />
      <RoadmapSection />
      <CTASection />
    </div>
  );
}
