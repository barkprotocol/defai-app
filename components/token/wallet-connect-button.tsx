import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { shortenAddress } from "@/lib/utils";
import { useCallback } from 'react';

export function WalletConnectButton() {
  const { connected, connecting, publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleConnect = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

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
    <Button variant="outline" onClick={disconnect} className="gap-2">
      <Wallet className="h-4 w-4" />
      {shortenAddress(publicKey.toString())}
    </Button>
  );
}