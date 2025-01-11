import { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Coins, RefreshCcw, TrendingUp, BarChart } from "lucide-react";

function DemoAnimationCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = useMemo(
    () => [
      {
        title: "Deposit",
        description:
          "Seamlessly deposit your tokens into liquidity pools for automated management.",
        icon: Coins,
      },
      {
        title: "Auto-Rebalance",
        description:
          "Let the system intelligently rebalance your holdings for optimal yield generation.",
        icon: RefreshCcw,
      },
      {
        title: "Earn Yields",
        description:
          "Watch your assets grow with dynamic yield optimization across multiple platforms.",
        icon: TrendingUp,
      },
      {
        title: "Monitor",
        description:
          "Track your earnings and liquidity health in real-time for full transparency.",
        icon: BarChart,
      },
    ],
    []
  );

  return (
    <Card className="max-w-lg mx-auto shadow-lg mt-16 mb-20 overflow-hidden">
      <CardContent className="p-10">
        <div className="relative h-40">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                step === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 rounded-full bg-[#DBCFC7] dark:bg-[#DBCFC7]/20">
                  <item.icon className="w-6 h-6 text-gray-900 dark:text-[#DBCFC7]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                step === index
                  ? "bg-[#DBCFC7] scale-125"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default DemoAnimationCard;
