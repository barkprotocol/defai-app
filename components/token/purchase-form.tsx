"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTokenPurchase } from "@/hooks/use-token-purchase";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

interface PurchaseFormProps {
  onSuccess?: () => void;
}

export function PurchaseForm({ onSuccess }: PurchaseFormProps) {
  const { purchaseToken, isLoading } = useTokenPurchase();
  const [amount, setAmount] = useState("");
  const [tokenType, setTokenType] = useState("3"); // Default to SOL

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate amount
    if (!amount || parseFloat(amount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    const success = await purchaseToken(parseFloat(amount), tokenType);
    if (success) {
      toast.success("Purchase successful!");
      onSuccess?.();
    } else {
      toast.error("Purchase failed. Please try again.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase BARK Tokens</CardTitle>
        <CardDescription>Enter amount and select payment token</CardDescription>
      </CardHeader>
      <CardContent>
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
              min="0.00001"
              step="0.00001"
              required
              className="w-full"
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
                <SelectItem value="1">
                  <img
                    src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                    alt="USDT"
                    className="w-5 h-5 mr-2"
                  />
                  USDT
                </SelectItem>
                <SelectItem value="2">
                  <img
                    src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png"
                    alt="USDC"
                    className="w-5 h-5 mr-2"
                  />
                  USDC
                </SelectItem>
                <SelectItem value="3">
                  <img
                    src="https://cryptologos.cc/logos/solana-sol-logo.png"
                    alt="SOL"
                    className="w-5 h-5 mr-2"
                  />
                  SOL
                </SelectItem>
                <SelectItem value="4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/PayPal_logo_2014.svg"
                    alt="PayPal USD"
                    className="w-5 h-5 mr-2"
                  />
                  PayPal USD
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading || !amount || parseFloat(amount) <= 0}
          >
            {isLoading ? "Processing..." : "Buy BARK"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
