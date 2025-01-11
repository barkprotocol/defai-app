import { SaleHeader } from "@/components/buy-bark/sale-header";
import { SaleStats } from "@/components/buy-bark/sale-stats";
import { SaleOptions } from "@/components/buy-bark/sale-options";
import { TokenCalculator } from "@/components/buy-bark/calculate-token-amount";
import { SaleProgress } from "@/components/buy-bark/sale-progress";
import { ParticleSystem } from "@/components/background/particle-system";

export default function BuyBARKPage() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Background Particle System */}
      <ParticleSystem />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <SaleHeader />
        <SaleStats />
        <SaleOptions />

        {/* Two-column Grid for Token Calculator and Sale Progress */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Token Calculator */}
            <TokenCalculator />
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Sale Progress */}
            <SaleProgress />
          </div>
        </div>
      </main>

      {/* Footer - Uncomment and add footer content if needed */}
      {/* <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2025 BARK Finance. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
