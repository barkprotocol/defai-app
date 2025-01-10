"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Wallet, Leaf } from "lucide-react";
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { shortenAddress } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { connected, connecting, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = () => {
    setVisible(true);
  };

  const WalletButton = () => {
    if (connecting) {
      return (
        <Button
          variant="outline"
          size="sm"
          disabled
          className="animate-fade-in hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm"
        >
          <Wallet className="h-4 w-4 mr-2 animate-spin" />
          Connecting...
        </Button>
      );
    }

    if (!connected || !publicKey) {
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={handleConnect}
          className="animate-fade-in hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm"
        >
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      );
    }

    return (
      <Button
        variant="outline"
        size="sm"
        onClick={disconnect}
        className="animate-fade-in hover:scale-105 transition-transform bg-background/50 backdrop-blur-sm"
      >
        <Wallet className="h-4 w-4 mr-2" />
        {shortenAddress(publicKey.toString())}
      </Button>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <div className="relative h-10 w-10">
              <Image
                src="https://ucarecdn.com/8aa0180d-1112-4aea-8210-55b266c3fb44/bark.png"
                alt="BARK Finance"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold text-xl">BARK</span>
            <span className="font-light text-xl">Finance</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className={cn(
                "text-sm font-medium transition-all hover:text-primary relative group",
                pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/pools"
              className={cn(
                "text-sm font-medium transition-all hover:text-primary relative group",
                pathname === "/pools" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Pools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/plant-tree"
              className={cn(
                "text-sm font-medium transition-all hover:text-primary relative group flex items-center gap-1",
                pathname === "/plant-tree" ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Leaf className="h-4 w-4" />
              Plant a Tree
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            {!isHome && <WalletButton />}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
