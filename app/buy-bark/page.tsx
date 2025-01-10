import { SaleHeader } from "@/components/buy-bark/sale-header";
import { SaleStats } from "@/components/buy-bark/sale-stats";
import { SaleOptions } from "@/components/buy-bark/sale-options";
import { TokenCalculator } from "@/components/buy-bark/token-calculator";
import { SaleProgress } from "@/components/buy-bark/sale-progress";
import { ParticleSystem } from "@/components/background/particle-system";

export default function BuyBARKPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Particle System */}
      <ParticleSystem />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <SaleHeader />
        <SaleStats />
        <SaleOptions />
        
        {/* Two-column Grid for Token Calculator and Sale Progress */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <TokenCalculator />
          <SaleProgress />
        </div>
      </main>
      
      {/* Optionally, you can add a footer here if needed */}
      {/* <footer>Footer Content</footer> */}
    </div>
  );
}
