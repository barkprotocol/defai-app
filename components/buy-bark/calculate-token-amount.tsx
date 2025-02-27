"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Card, CardContent } from "@/components/ui/card";

// Utility functions with two arguments
const calculateTokenAmount = (usdAmount: number, pricePerToken: number) => {
  return usdAmount / pricePerToken;
};

const calculateBarkAmount = (usdAmount: number, pricePerBark: number) => {
  return usdAmount / pricePerBark;
};

const calculateVestingAmount = (usdAmount: number, pricePerVesting: number) => {
  return usdAmount * pricePerVesting;
};

// Prices for tokens in USD (define prices here)
const PRICES = {
  BARK: 0.00001, // Price for BARK token
  VESTING: 0.000025, // Price for VESTING token
  SOL: 220,  // Example price for SOL token (1 SOL = $220 in this case)
};

// Example recommended amounts
const RECOMMENDED_AMOUNTS = [10, 50, 100, 500, 1000];

export function TokenCalculator() {
  const [amount, setAmount] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Calculate token amounts based on the input USD amount
  const tokenInfo = amount
    ? {
        bark: calculateBarkAmount(Number(amount), PRICES.BARK),
        vesting: calculateVestingAmount(Number(amount), PRICES.VESTING),
        sol: calculateTokenAmount(Number(amount), PRICES.SOL),
      }
    : null;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Token Calculator Card */}
      <Card className="flex-1 max-w-[650px] mx-auto hover:shadow-lg transition-all duration-300 p-6 rounded-lg bg-white dark:bg-gray-950">
        <CardContent>
          <h2 className="text-xl font-bold mb-4 text-black dark:text-white text-center">Calculate Token Amount</h2>

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block text-black dark:text-white">Enter Amount in USD</label>
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
                  className="bg-black text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  ${preset.toLocaleString()}
                </Button>
              ))}
            </div>

            {tokenInfo && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Amount in BARK:</span>
                    <span className="font-mono">{tokenInfo.bark.toLocaleString()} BARK</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Price: ${PRICES.BARK} per BARK</div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Amount in VESTING:</span>
                    </div>
                    <span className="font-mono">{tokenInfo.vesting.toLocaleString()} VESTING</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Price: ${PRICES.VESTING} per VESTING (50% discount)</div>
                </div>
                <div className="bg-sol/5 dark:bg-sol/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Amount in SOL:</span>
                    <span className="font-mono">{tokenInfo.sol.toLocaleString()} SOL</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Price: ${PRICES.SOL} per SOL</div>
                </div>
              </div>
            )}

            <Button
              className="w-full bg-black text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              size="lg"
              onClick={() => setIsModalOpen(true)}
            >
              Buy Tokens <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal for Buying Tokens */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Confirm Purchase</h3>
          {/* Add your modal content here */}
          <p>Confirm the purchase of {tokenInfo?.bark?.toLocaleString()} BARK tokens.</p>
          <Button onClick={() => console.log("Purchase confirmed!")}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}
