"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOTAL_SUPPLY, SOLD_AMOUNT } from "@/lib/constants/sale";
import { AcceptedTokens } from "./accepted-tokens";

export function SaleProgress() {
  // Calculate progress percentage
  const progress = (SOLD_AMOUNT / TOTAL_SUPPLY) * 100;

  return (
    <Card className="hover:shadow-lg bg-white transition-all duration-300 dark:bg-gray-800 w-full md:w-[650px] mx-auto">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-950 dark:text-white">Sale Progress</h2>

        {/* Progress Bar */}
        <div className="relative h-4 mb-4 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
          <div
            className="h-full transition-all"
            style={{ width: `${progress}%`, backgroundColor: "#dbcfc7" }}
          />
        </div>

        {/* Progress Details */}
        <div className="flex justify-between text-sm text-muted-foreground mb-8">
          <span className="text-gray-950 dark:text-white">
            {SOLD_AMOUNT.toLocaleString("en-US")} BARK
          </span>
          <span className="text-gray-950 dark:text-white">
            {TOTAL_SUPPLY.toLocaleString("en-US")} BARK
          </span>
        </div>

        {/* Recommended Amounts */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-950 dark:text-white">
              Recommended Amounts
            </h3>
            <div className="space-y-2">
              {[
                { range: "$100 - $499", label: "Starter" },
                { range: "$500 - $999", label: "Growth" },
                { range: "$1,000 - $4,999", label: "Premium" },
                { range: "$5,000+", label: "Elite" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                >
                  <span className="text-gray-950 dark:text-white">{tier.range}</span>
                  <Badge variant="default" className="bg-black text-white">
                    {tier.label}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Accepted Tokens */}
          <AcceptedTokens />
        </div>
      </CardContent>
    </Card>
  );
}
