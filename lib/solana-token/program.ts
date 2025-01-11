import { useConnection, useAnchorWallet } from "@solana/wallet-adapter-react";
import { AnchorProvider, Program, web3 } from "@coral-xyz/anchor";
import type { PdaVesting } from "@/pda_vesting";
import idl from "./pda_vesting.json";

// Replace with your actual program ID
const PROGRAM_ID = new web3.PublicKey("HtCmEisf9LkzJWb1C4r1MLG1zA3bwBxm1X9BNjArW1PZ");  // Replace with actual program ID

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
        PROGRAM_ID,  // Correct program ID for contract
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

// Exporting the type for PdaVesting so it can be used elsewhere
export type { PdaVesting };
