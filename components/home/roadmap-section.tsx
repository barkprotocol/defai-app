"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Rocket, Lock, Users, Shield, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Milestone {
  quarter: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  items: string[];
  icon: LucideIcon;
}

const milestones: Milestone[] = [
  {
    quarter: "Q1 2024",
    title: "Foundation Phase",
    status: "completed",
    items: [
      "Initial concept development",
      "Technical architecture design",
      "Core team formation",
      "Community building started",
    ],
    icon: Shield
  },
  {
    quarter: "Q3-2024 - Q1 2025",
    title: "Development Phase",
    status: "completed",
    items: [
      "Platform development kickoff",
      "Smart contract development",
      "BARK Token Launch",
      "Security audits initiated",
    ],
    icon: Zap
  },
  {
    quarter: "Q1 2025",
    title: "Launch Phase",
    status: "current",
    items: [
      "Platform beta testing",
      "Security audits completed",
      "BARK Token smart contract deployment",
    ],
    icon: Rocket
  },
  {
    quarter: "Post Launch",
    title: "Growth Phase",
    status: "upcoming",
    items: [
      "Platform feature expansion",
      "Additional DEX integrations",
      "Partnership discussions",
      "Mobile app development",
      "Cross-chain expansion"
    ],
    icon: Users
  }
];

interface MilestoneCardProps extends Milestone {
  index: number;
  inView: boolean;
}

function MilestoneCard({ quarter, title, status, items, icon: Icon, index, inView }: MilestoneCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-700 transform",
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        status === "current" && "border-gray-700"
      )}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* Updated badge color based on status */}
            <Badge variant={
              status === "completed" ? "secondary" :
              status === "current" ? "default" : "outline"
            } 
            className={cn(
              status === "completed" && "bg-[#DBCFC7] text-black", // Light color for completed
              status === "current" && "bg-black text-white", // Black for current
              status === "upcoming" && "bg-[#DBCFC7] text-black" // Light color for upcoming
            )}>
              {quarter}
            </Badge>
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
          </div>
          <div className="bg-gray-200 text-gray-800 w-12 h-12 rounded-xl flex items-center justify-center">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {status === "completed" ? (
                <CheckCircle2 className="h-5 w-5 text-gray-600" />
              ) : status === "current" ? (
                <Circle className="h-5 w-5 text-gray-700 animate-pulse" />
              ) : (
                <Lock className="h-5 w-5 text-gray-400" />
              )}
              <span className={cn(
                "text-sm",
                status === "upcoming" && "text-gray-400"
              )}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function RoadmapSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_var(--tw-gradient-stops))] from-gray-200/5 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Journey</h2>
          <p className="text-xl text-gray-600">
            From concept to reality - the BARK roadmap
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={milestone.quarter}
              {...milestone}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
