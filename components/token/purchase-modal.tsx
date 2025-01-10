"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WalletConnectButton } from "@/components/token/wallet-connect-button";
import { PurchaseForm } from "@/components/token/purchase-form";
import { useWallet } from "@solana/wallet-adapter-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { connected } = useWallet();

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
              <WalletConnectButton />
            </div>
          ) : (
            <PurchaseForm onSuccess={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}