"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TOTAL_SUPPLY, SOLD_AMOUNT } from "@/lib/constants/sale";
import { AcceptedTokens } from "./accepted-tokens";

export function SaleProgress() {
  const progress = (SOLD_AMOUNT / TOTAL_SUPPLY) * 100;

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6">Sale Progress</h2>
        <div className="relative h-4 mb-4 w-full overflow-hidden rounded-full bg-primary/20">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mb-8">
          <span>{SOLD_AMOUNT.toLocaleString()} BARK</span>
          <span>{TOTAL_SUPPLY.toLocaleString()} BARK</span>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Recommended Amounts</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span>$100 - $499</span>
                <Badge variant="secondary">Starter</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span>$500 - $999</span>
                <Badge variant="secondary">Growth</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span>$1,000 - $4,999</span>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-muted/50">
                <span>$5,000+</span>
                <Badge variant="secondary">Elite</Badge>
              </div>
            </div>
          </div>
          <AcceptedTokens />
        </div>
      </CardContent>
    </Card>
  );
}