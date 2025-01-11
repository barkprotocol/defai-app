"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState, useEffect, useCallback } from "react";

const initialData = [
  { date: "Jan 1", value: 25000 },
  { date: "Jan 7", value: 25800 },
  { date: "Jan 14", value: 26200 },
  { date: "Jan 21", value: 25900 },
  { date: "Jan 28", value: 26800 },
  { date: "Feb 4", value: 27500 },
  { date: "Feb 11", value: 28200 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      date: string;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload?.[0]) {
    return (
      <div className="bg-card p-3 border rounded-lg shadow-lg">
        <p className="text-sm font-medium">{payload[0].payload.date}</p>
        <p className="text-lg font-bold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function UserPerformance() {
  const [data, setData] = useState(initialData.map(item => ({ ...item, value: 25000 })));
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(initialData);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Debounced function to optimize hover state update
  const debouncedSetHoveredValue = useCallback(
    debounce((value: number) => {
      setHoveredValue(value);
    }, 300),
    []
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Portfolio Performance
          {hoveredValue && (
            <span className="text-lg font-normal animate-fade-in">
              ${hoveredValue.toLocaleString()}
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={data}
              margin={{ top: 5, right: 5, bottom: 5, left: 25 }}
              onMouseMove={(e: any) => {
                if (e?.activePayload?.[0]) {
                  debouncedSetHoveredValue(e.activePayload[0].value);
                }
              }}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <XAxis 
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'currentColor', fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--dark-gray))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6, className: "animate-pulse" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

// Debounce function to limit how often the callback is invoked
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
