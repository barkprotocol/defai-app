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
  const { connected, isConnecting } = useSolanaWallet();

  return (
    <Dialog open={isOpen} onOpenChange={onClose} aria-labelledby="buy-token-modal-title" aria-describedby="buy-token-modal-description">
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle id="buy-token-modal-title">Buy BARK Tokens</DialogTitle>
          <DialogDescription id="buy-token-modal-description">
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
              {isConnecting && (
                <p className="text-sm mt-2 text-muted-foreground">Connecting your wallet...</p>
              )}
            </div>
          ) : (
            <BuyTokenForm onSuccess={onClose} defaultAmount={defaultAmount} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
