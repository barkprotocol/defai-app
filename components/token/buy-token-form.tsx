// token-purchase.tsx

"use client";

import { useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONFIG } from "../../lib/solana-token/config";
import { PAYMENT_TOKENS } from "../../lib/solana-token/constants";
import { useTokenPurchase } from "../../lib/solana-token/token-purchase";

interface BuyTokenFormProps {
  onSuccess?: () => void;
  defaultAmount?: string;
}

export function BuyTokenForm({ onSuccess, defaultAmount }: BuyTokenFormProps) {
  const { connection } = useConnection();
  const { buyToken, isReady } = useTokenPurchase();
  const [amount, setAmount] = useState(defaultAmount || "");
  const [tokenType, setTokenType] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReady) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      setIsLoading(true);
      const selectedToken = PAYMENT_TOKENS[tokenType as keyof typeof PAYMENT_TOKENS];
      
      const tx = await buyToken(
        parseFloat(amount),
        tokenType,
        selectedToken.mint
      );

      await connection.confirmTransaction(tx, CONFIG.COMMITMENT);
      
      toast.success("Purchase successful!", {
        description: "Your BARK tokens have been sent to your wallet"
      });
      onSuccess?.();
    } catch (error: any) {
      toast.error("Transaction failed", {
        description: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount
          </label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min={CONFIG.MIN_AMOUNT}
            step={CONFIG.MIN_AMOUNT}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="token-type" className="text-sm font-medium">
            Payment Token
          </label>
          <Select value={tokenType} onValueChange={setTokenType}>
            <SelectTrigger>
              <SelectValue placeholder="Select token" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(PAYMENT_TOKENS).map(([value, token]) => (
                <SelectItem key={value} value={value}>
                  {token.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading || !isReady}
        >
          {isLoading ? "Processing..." : "Buy BARK"}
        </Button>
      </form>
    </div>
  );
}