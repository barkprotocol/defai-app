"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WalletConnectButton } from "@/components/token/wallet-connect-button";
import { PurchaseForm } from "@/components/token/purchase-form";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState, useEffect } from "react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { connected, connecting, disconnect } = useWallet();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Reset loading state when modal is opened/closed
    if (!isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleWalletConnect = async () => {
    if (!connected && !connecting) {
      setIsLoading(true);
      // You could add logic to handle automatic wallet connection if required
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy BARK Tokens</DialogTitle>
          <DialogDescription>
            Enter the amount and select your payment token to purchase BARK tokens.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {!connected ? (
            <div className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Connect your wallet to buy BARK tokens
              </p>
              <WalletConnectButton onClick={handleWalletConnect} />
            </div>
          ) : (
            <PurchaseForm onSuccess={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
