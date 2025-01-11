import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { processTransfer } from "./transactions";

async function executeTransaction() {
  const connection = new Connection("https://api.devnet.solana.com", "processed");
  const senderKeypair = Keypair.generate(); // You should use an actual keypair in real use
  const recipientPublicKey = new PublicKey("2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg");

  try {
    const txSignature = await processTransfer(connection, senderKeypair, recipientPublicKey, 1000000000);
    console.log("Transaction completed with signature:", txSignature);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

executeTransaction();
