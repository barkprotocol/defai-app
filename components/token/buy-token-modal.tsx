"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { WalletConnectButton } from "./wallet-connect-button";
import { BuyTokenForm } from "./buy-token-form";
import { useSolanaWallet } from "@/hooks/use-solana-wallet";

interface BuyTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount?: string;
}

export function BuyTokenModal({ isOpen, onClose, defaultAmount }: BuyTokenModalProps) {
  const { connected } = useSolanaWallet();

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
            <BuyTokenForm onSuccess={onClose} defaultAmount={defaultAmount} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}