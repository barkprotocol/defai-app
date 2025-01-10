import { AnchorProvider, Program, web3 } from "@coral-xyz/anchor";
import type { PdaVesting } from "@/pda_vesting";
import idl from "./pda_vesting.json";

// Replace with your actual program ID
const PROGRAM_ID = new web3.PublicKey("HtCmEisf9LkzJWb1C4r1MLG1zA3bwBxm1X9BNjArW1PZ");  // Replace with actual program ID

let _program: Program<PdaVesting> | null = null;

export const getProgramInstance = (provider: AnchorProvider): Program<PdaVesting> => {
  if (!_program) {
    // Initialize the program with the IDL, PROGRAM_ID, and the provider
    _program = new Program<PdaVesting>(
      JSON.parse(JSON.stringify(idl)),
      PROGRAM_ID,  // Correct program ID for contract
      provider
    );
  }
  return _program;
};

export type { PdaVesting };
