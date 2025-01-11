import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { shortenAddress } from "@/lib/utils";
import { useCallback, useState } from 'react';

export function WalletConnectButton() {
  const { connected, connecting, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [isError, setIsError] = useState(false);

  const handleConnect = useCallback(() => {
    try {
      setVisible(true);
      setIsError(false);
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setIsError(true);
    }
  }, [setVisible]);

  const handleDisconnect = useCallback(() => {
    try {
      disconnect();
      setIsError(false);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
      setIsError(true);
    }
  }, [disconnect]);

  if (connecting) {
    return (
      <Button disabled className="gap-2">
        <Wallet className="h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    );
  }

  if (!connected || !publicKey) {
    return (
      <Button onClick={handleConnect} className="gap-2">
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      onClick={handleDisconnect} 
      className="gap-2" 
      aria-label="Disconnect wallet"
    >
      <Wallet className="h-4 w-4" />
      {isError ? "Error!" : shortenAddress(publicKey.toString())}
    </Button>
  );
}
