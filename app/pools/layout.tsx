"use client";

import { Container } from "@/components/layout/container";

export default function PoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-8">
        {children}
      </Container>
    </div>
  );
}