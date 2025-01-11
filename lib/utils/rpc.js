import { Connection, Keypair, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { simulateTransaction, SuccessfulTxSimulationResponse } from "./utils/rpc";

// Set up a connection to Solana (use devnet for testing)
const connection = new Connection("https://api.devnet.solana.com", "processed");

// The sender and recipient public keys
const senderKeypair = Keypair.generate();
const recipientPublicKey = new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg");

// Create a transfer transaction
const tx = new Transaction().add(
  SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: recipientPublicKey,
    lamports: 1000000000, // 1 SOL (in lamports)
  })
);

async function handleSimulation() {
  try {
    // Simulate the transaction
    const simulationResult: SuccessfulTxSimulationResponse = await simulateTransaction(
      connection,
      tx,
      [senderKeypair] // Pass in signers for the simulation
    );

    // Ensure that the response contains the expected value
    if (!simulationResult || !simulationResult.value) {
      throw new Error("Simulation did not return a valid result.");
    }

    // Check for errors in simulation
    if (simulationResult.value.err) {
      console.error("Simulation error:", simulationResult.value.err);
    } else {
      console.log("Simulation successful!");
      console.log("Logs:", simulationResult.value.logs); // Logs for debugging
    }
  } catch (error) {
    console.error("Error simulating transaction:", error.message || error);
  }
}

handleSimulation();
