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
  const { connected, connecting, disconnect, connect } = useWallet();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Reset loading state when modal is opened/closed
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
    } else {
      // If modal opens, attempt to auto-connect if not already connected
      if (!connected && !connecting) {
        handleWalletConnect();
      }
    }
  }, [isOpen, connected, connecting]);

  const handleWalletConnect = async () => {
    if (!connected && !connecting) {
      setIsLoading(true);
      try {
        await connect(); // Attempt to connect the wallet
      } catch (error) {
        console.error("Wallet connection failed:", error);
      } finally {
        setIsLoading(false);
      }
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
          {/* Show wallet connection button if not connected */}
          {!connected ? (
            <div className="text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Connect your wallet to buy BARK tokens
              </p>
              <WalletConnectButton
                onClick={handleWalletConnect}
                className="bg-black text-white hover:bg-gray-800"
                disabled={isLoading} // Disable button while connecting
              />
              {isLoading && (
                <p className="mt-4 text-sm text-muted-foreground">Connecting...</p>
              )}
            </div>
          ) : (
            // Show purchase form if connected
            <PurchaseForm onSuccess={onClose} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
