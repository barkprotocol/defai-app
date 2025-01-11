import { web3, BN, Program } from '@coral-xyz/anchor';
import { getAssociatedTokenAddress } from '@solana/spl-token';
import { BARK_PROGRAM_ID, BARK_MINT, TOKEN_MINTS } from './config';
import { getProgramInstance } from './program';

/**
 * Creates a transaction to buy a token using the specified wallet and token amount.
 * @param wallet - The public key of the wallet making the purchase.
 * @param amount - The amount of the token to purchase.
 * @param tokenType - The type of token being purchased (string representation of the type).
 * @returns {Promise<web3.Transaction>} The generated transaction for buying the token.
 * @throws {Error} Throws an error if the transaction creation fails.
 */
export async function createBuyTokenTransaction(
  wallet: web3.PublicKey,
  amount: number,
  tokenType: string
): Promise<web3.Transaction> {
  try {
    // Get the program instance
    const program = await getProgramInstance();

    // Resolve the correct token mint address based on the token type
    const tokenMint = new web3.PublicKey(getTokenMintByType(tokenType));
    const barkMint = new web3.PublicKey(BARK_MINT);

    // Get the associated token addresses for the user
    const userTokenAccount = await getAssociatedTokenAddress(tokenMint, wallet);
    const userBarkAccount = await getAssociatedTokenAddress(barkMint, wallet);

    // Get PDA for the BARK sale account
    const [barkSaleAccount] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('bark-sale-account'), wallet.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Get PDA for the BARK sale token account
    const [barkSaleTokenAccount] = web3.PublicKey.findProgramAddressSync(
      [barkSaleAccount.toBuffer(), barkMint.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Convert the amount to the smallest unit (BARK token has 9 decimals)
    const amountBN = new BN(amount * 1e9); // Convert to 9 decimals (assuming BARK token has 9 decimals)

    // Prepare the transaction with necessary accounts and instructions
    let tx: any; // Use 'any' for flexibility with transaction types

    if (tokenType === '3') {
      // Handling SOL transfer (No mint, use SystemProgram.transfer)
      tx = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: wallet,
          toPubkey: barkSaleAccount,
          lamports: amountBN.toNumber(),
        })
      );
    } else {
      // Handling other token transfers (USDT, USDC, etc.)
      tx = await program.methods
        .buyToken(amountBN, parseInt(tokenType)) // Pass the amount with the correct decimals
        .accounts({
          barkSaleAccount,
          userTokenAccount,
          barkSaleTokenAccount,
          userBarkAccount,
          barkMintAccount: barkMint,
          user: wallet,
          systemProgram: web3.SystemProgram.programId,
          tokenProgram: new web3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // Token Program ID
          associatedTokenProgram: new web3.PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'), // Associated Token Program ID
        })
        .transaction();
    }

    return tx;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

/**
 * Resolves the token mint address based on the token type.
 * @param tokenType - The type of the token (string representation of the type).
 * @returns The mint address of the token.
 * @throws Error if the token type is invalid.
 */
function getTokenMintByType(tokenType: string): string {
  switch (tokenType) {
    case '1': return TOKEN_MINTS.USDT; // USDT
    case '2': return TOKEN_MINTS.USDC; // USDC
    case '3': return TOKEN_MINTS.SOL;  // SOL (Special handling for SOL)
    case '4': return TOKEN_MINTS.PAYPAL_USD; // PayPal USD (or other supported token types)
    default: 
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}

/**
 * Sends a transaction and returns the signature.
 * @param tx - The transaction to send.
 * @param connection - The Solana connection to send the transaction.
 * @returns The transaction signature.
 */
async function sendTransaction(tx: web3.Transaction, connection: web3.Connection): Promise<string> {
  try {
    // Sign the transaction (example assumes you're using Phantom, for instance)
    const signedTx = await phantomWallet.signTransaction(tx); // Assuming phantomWallet is defined

    // Send the transaction and get the signature
    const signature = await web3.sendAndConfirmTransaction(connection, signedTx);

    // Return the signature (it's a string)
    return signature;
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
}
