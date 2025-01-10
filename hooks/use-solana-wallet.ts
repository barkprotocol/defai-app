"use client";

import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback } from 'react';
import { toast } from 'sonner';

export function useSolanaWallet() {
  const { connected, publicKey, connect, disconnect } = useWallet();

  const handleConnect = useCallback(async () => {
    try {
      await connect();
    } catch (error: any) {
      toast.error('Failed to connect wallet', {
        description: error.message
      });
    }
  }, [connect]);

  return {
    connected,
    publicKey,
    connect: handleConnect,
    disconnect
  };
}