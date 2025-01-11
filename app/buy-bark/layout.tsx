import { Container } from "@/components/layout/container";

export default function BuyBARKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Container>
        {children}
      </Container>
    </div>
  );
}
