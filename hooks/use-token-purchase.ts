"use client";

import { useState } from 'react';
import { web3, BN } from '@coral-xyz/anchor';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { toast } from 'sonner';
import { createBuyTokenTransaction } from '@/lib/solana/token-purchase';

export function useTokenPurchase() {
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [isLoading, setIsLoading] = useState(false);

  const purchaseToken = async (amount: number, tokenType: string) => {
    if (!publicKey || !signTransaction) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      setIsLoading(true);
      const tx = await createBuyTokenTransaction(publicKey, amount, tokenType);
      const signedTx = await signTransaction(tx);
      const signature = await connection.sendRawTransaction(signedTx.serialize());
      const confirmation = await connection.confirmTransaction(signature, 'confirmed');
      
      if (confirmation.value.err) {
        throw new Error('Transaction failed');
      }

      toast.success("Purchase successful!", {
        description: "Your BARK tokens have been sent to your wallet"
      });

      return true;
    } catch (error: any) {
      toast.error("Transaction failed", {
        description: error.message
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    purchaseToken,
    isLoading
  };
}