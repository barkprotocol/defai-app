import { web3, BN, Program } from '@coral-xyz/anchor';
import { getAssociatedTokenAddress } from '@solana/spl-token';
import { BARK_PROGRAM_ID, BARK_MINT, TOKEN_MINTS } from './config';
import { getProgramInstance } from './program';

export async function createBuyTokenTransaction(
  wallet: web3.PublicKey,
  amount: number,
  tokenType: string
) {
  try {
    const program = await getProgramInstance();

    // Get the correct token mint address based on the token type
    const tokenMint = new web3.PublicKey(getTokenMintByType(tokenType));
    const barkMint = new web3.PublicKey(BARK_MINT);

    // Get the associated token addresses for the user
    const userTokenAccount = await getAssociatedTokenAddress(tokenMint, wallet);
    const userBarkAccount = await getAssociatedTokenAddress(barkMint, wallet);

    // Get PDA for the BARK sale account
    const [barkSaleAccount] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from("bark-sale-account"), wallet.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Get PDA for the BARK sale token account
    const [barkSaleTokenAccount] = web3.PublicKey.findProgramAddressSync(
      [barkSaleAccount.toBuffer(), barkMint.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Convert the amount to the smallest unit (BARK token has 9 decimals)
    const amountBN = new BN(amount * 1e9); // Convert to 9 decimals

    // Prepare the transaction with necessary accounts and instructions
    const tx = await program.methods
      .buyToken(amountBN, parseInt(tokenType))  // Pass the amount with the correct decimals
      .accounts({
        barkSaleAccount,
        userTokenAccount,
        barkSaleTokenAccount,
        userBarkAccount,
        barkMintAccount: barkMint,
        user: wallet,
        systemProgram: web3.SystemProgram.programId,
        tokenProgram: new web3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
        associatedTokenProgram: new web3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),
      })
      .transaction();

    return tx;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

function getTokenMintByType(tokenType: string): string {
  switch (tokenType) {
    case "1": return TOKEN_MINTS.USDT; // USDT
    case "2": return TOKEN_MINTS.USDC; // USDC
    case "3": return TOKEN_MINTS.SOL;  // SOL
    case "4": return TOKEN_MINTS.PAYPAL_USD; // PAYPAL moved to "4"
    default: throw new Error("Invalid token type");
  }
}
