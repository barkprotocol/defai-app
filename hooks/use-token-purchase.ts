import { useState, useEffect } from "react";
import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { AnchorProvider, Program, web3 } from "@coral-xyz/anchor";
import BN from "bn.js";
import { getAssociatedTokenAddress, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PdaVesting } from "@/pda_vesting";
import idl from "./pda_vesting.json";
import { CONFIG } from "@/lib/solana-token/config";

// Replace with your actual program ID
const PROGRAM_ID = new web3.PublicKey("HtCmEisf9LkzJWb1C4r1MLG1zA3bwBxm1X9BNjArW1PZ");

let _program: Program<PdaVesting> | null = null;

/**
 * Fetches the program instance. If the program has not been initialized yet, it initializes it.
 * @param provider - The AnchorProvider that connects to the Solana network.
 * @returns Program - The program instance connected to the provider.
 */
export const getProgramInstance = (provider: AnchorProvider): Program<PdaVesting> => {
  if (!_program) {
    try {
      // Initialize the program with the IDL, PROGRAM_ID, and the provider
      _program = new Program<PdaVesting>(
        JSON.parse(JSON.stringify(idl)),
        PROGRAM_ID,
        provider
      );
      console.log("Program initialized successfully");
    } catch (error) {
      console.error("Failed to initialize the program:", error);
      throw new Error("Error initializing the program");
    }
  }
  return _program;
};

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

  /**
   * Fetches the required accounts for the token purchase process.
   * @param userPublicKey - The public key of the user.
   * @param paymentTokenMint - The mint address of the payment token.
   * @returns A collection of program accounts needed for the token purchase.
   */
  async getProgramAccounts(
    userPublicKey: PublicKey,
    paymentTokenMint: PublicKey
  ) {
    try {
      const [barkSaleAccount] = await PublicKey.findProgramAddress(
        [Buffer.from("bark-sale-account"), CONFIG.OWNER_INITIALIZE_WALLET.toBuffer()],
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
    } catch (error) {
      console.error("Error getting program accounts:", error);
      throw new Error("Failed to fetch program accounts.");
    }
  }

  /**
   * Purchases the token by calling the smart contract's method.
   * @param amount - The amount of the token to purchase.
   * @param tokenType - The type of token being purchased.
   * @param paymentTokenMint - The mint address of the payment token.
   * @returns The response from the smart contract method.
   */
  async buyToken(
    amount: number,
    tokenType: number,
    paymentTokenMint: PublicKey
  ) {
    try {
      const accounts = await this.getProgramAccounts(
        this.provider.publicKey,
        paymentTokenMint
      );

      const numericAmount = new BN(amount * CONFIG.DECIMALS);

      const response = await this.program.methods
        .buyToken(numericAmount, tokenType)
        .accounts({
          ...accounts,
          barkMintAccount: CONFIG.BARK_MINT,
          user: this.provider.publicKey,
        })
        .rpc();

      return response;
    } catch (error) {
      console.error("Error purchasing token:", error);
      throw new Error("Failed to complete token purchase.");
    }
  }
}

/**
 * Custom hook for initializing and getting the token purchase program instance.
 */
export const useTokenPurchaseProgram = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [program, setProgram] = useState<TokenPurchaseProgram | null>(null);

  useEffect(() => {
    if (wallet && connection) {
      // Make sure wallet is valid
      const provider = new AnchorProvider(connection, wallet, {
        commitment: CONFIG.COMMITMENT,
      });
      setProgram(TokenPurchaseProgram.initialize(provider));
    }
  }, [connection, wallet]);

  return program;
};

/**
 * Custom hook for token purchase functionality, providing methods to buy tokens.
 */
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

    const tokenTypeNum = parseInt(tokenType);
    if (isNaN(tokenTypeNum)) {
      throw new Error("Invalid token type");
    }

    return program.buyToken(amount, tokenTypeNum, paymentTokenMint);
  };

  return {
    program,
    buyToken,
    isReady: !!program
  };
};
