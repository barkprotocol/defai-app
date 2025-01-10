"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign, ArrowRight, Clock } from "lucide-react";
import { useState } from "react";
import { BuyTokenModal } from "@/components/token/buy-token-modal";
import { calculateTokenAmount, calculateVestingAmount } from "@/lib/utils/token-calculations";
import { RECOMMENDED_AMOUNTS } from "@/lib/constants/sale";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function TokenCalculator() {
  const [amount, setAmount] = useState("");
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const tokenInfo = amount ? {
    instant: calculateTokenAmount(Number(amount)),
    vesting: calculateVestingAmount(Number(amount))
  } : null;

  return (
    <Card className="hover:shadow-lg transition-all duration-300" id="calculator">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Calculate BARK Tokens</h2>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Enter Amount in USD</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {RECOMMENDED_AMOUNTS.map((preset) => (
              <Button
                key={preset}
                variant="outline"
                onClick={() => setAmount(preset.toString())}
                className="relative group"
              >
                ${preset.toLocaleString()}
              </Button>
            ))}
          </div>

          {tokenInfo && (
            <div className="space-y-2">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Instant Access:</span>
                  <span className="font-mono">{tokenInfo.instant.toLocaleString()} BARK</span>
                </div>
                <div className="text-xs text-muted-foreground">Price: $0.00001 per BARK</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">With Vesting:</span>
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-mono">{tokenInfo.vesting.toLocaleString()} BARK</span>
                </div>
                <div className="text-xs text-muted-foreground">Price: $0.000025 per BARK (50% discount)</div>
              </div>
            </div>
          )}

          <Button 
            className="w-full" 
            size="lg"
            onClick={() => setIsBuyModalOpen(true)}
          >
            Buy BARK Tokens <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>

      <BuyTokenModal 
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        defaultAmount={amount}
      />
    </Card>
  );
}