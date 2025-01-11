import { web3, BN, Program } from '@coral-xyz/anchor';
import { getAssociatedTokenAddress } from '@solana/spl-token';
import { BARK_PROGRAM_ID, BARK_MINT, TOKEN_MINTS } from './config';
import { getProgramInstance } from './program';

/**
 * Resolves the token mint address based on the token type.
 * @param tokenType - The type of the token (string representation of the type).
 * @returns The mint address of the token or an empty string for SOL.
 * @throws Error if the token type is invalid.
 */
function getTokenMintByType(tokenType: string): string {
  switch (tokenType) {
    case '1': return TOKEN_MINTS.USDT; // USDT
    case '2': return TOKEN_MINTS.USDC; // USDC
    case '3': return ''; // SOL is treated separately (no mint)
    case '4': return TOKEN_MINTS.PAYPAL_USD; // PayPal USD (or other supported token types)
    default: 
      throw new Error(`Invalid token type: ${tokenType}`);
  }
}

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

    // Get the token mint (or empty string for SOL)
    const tokenMint = getTokenMintByType(tokenType);
    const barkMint = new web3.PublicKey(BARK_MINT);

    let tx: any; // Use 'any' type for tx to bypass type checks

    // If tokenType is 'SOL', handle it separately
    if (tokenMint === '') {
      tx = new web3.Transaction();
      const amountLamports = amount * web3.LAMPORTS_PER_SOL; // Convert SOL to lamports

      // Add instruction to transfer SOL (native SOL transfer)
      tx.add(
        web3.SystemProgram.transfer({
          fromPubkey: wallet,
          toPubkey: barkMint, // Assuming barkMint is the receiving wallet here
          lamports: amountLamports,
        })
      );
    } else {
      // Handle SPL token transfers
      const userTokenAccount = await getAssociatedTokenAddress(new web3.PublicKey(tokenMint), wallet);
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

      // Prepare the transaction with necessary accounts and instructions for SPL token transfer
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
