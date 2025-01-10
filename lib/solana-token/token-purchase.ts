import { PublicKey, SystemProgram } from "@solana/web3.js";
import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useMemo } from "react";
import { CONFIG } from "./config";
import { getProgramInstance } from "./program";
import type { PdaVesting } from "./program";

export class TokenPurchaseProgram {
  private constructor(
    private provider: AnchorProvider,
    private program: Program<PdaVesting>
  ) {}

  static initialize(provider: AnchorProvider): TokenPurchaseProgram {
    const program = getProgramInstance(provider);
    return new TokenPurchaseProgram(provider, program);
  }

  get providerPublicKey(): PublicKey {
    return this.provider.publicKey;
  }

  get programId(): PublicKey {
    return this.program.programId;
  }

  async getProgramAccounts(
    userPublicKey: PublicKey,
    paymentTokenMint: PublicKey
  ) {
    const [barkSaleAccount] = await PublicKey.findProgramAddress(
      [Buffer.from("BARK-sale-account"), CONFIG.OWNER_INITIALIZE_WALLET.toBuffer()],
      this.program.programId
    );

    const userTokenAccount = await getAssociatedTokenAddress(
      paymentTokenMint,
      userPublicKey
    );

    const ownerTokenAccount = await getAssociatedTokenAddress(
      paymentTokenMint,
      CONFIG.OWNER_TOKEN_RECEIVE_WALLET
    );

    const barkSaleTokenAccount = await getAssociatedTokenAddress(
      CONFIG.BARK_MINT,
      barkSaleAccount,
      true
    );

    const userBarkAccount = await getAssociatedTokenAddress(
      CONFIG.BARK_MINT,
      userPublicKey
    );

    return {
      barkSaleAccount,
      userTokenAccount,
      ownerTokenAccount,
      barkSaleTokenAccount,
      userBarkAccount,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    };
  }

  async buyToken(
    amount: number,
    tokenType: number,
    paymentTokenMint: PublicKey
  ) {
    const accounts = await this.getProgramAccounts(
      this.provider.publicKey,
      paymentTokenMint
    );

    const numericAmount = new BN(amount * CONFIG.DECIMALS);

    return await this.program.methods
      .buyToken(numericAmount, tokenType)
      .accounts({
        ...accounts,
        barkMintAccount: CONFIG.BARK_MINT,
        user: this.provider.publicKey,
      })
      .rpc();
  }
}

// Custom hook to get program instance
export const useTokenPurchaseProgram = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  return useMemo(() => {
    if (!wallet) return null;

    const provider = new AnchorProvider(connection, wallet as any, {
      commitment: CONFIG.COMMITMENT,
    });

    return TokenPurchaseProgram.initialize(provider);
  }, [connection, wallet]);
};

// Custom hook for program methods with loading state
export const useTokenPurchase = () => {
  const program = useTokenPurchaseProgram();

  const buyToken = async (
    amount: number,
    tokenType: string,
    paymentTokenMint: PublicKey
  ) => {
    if (!program) {
      throw new Error("Wallet not connected");
    }

    return program.buyToken(
      amount,
      parseInt(tokenType),
      paymentTokenMint
    );
  };

  return {
    program,
    buyToken,
    isReady: !!program
  };
};