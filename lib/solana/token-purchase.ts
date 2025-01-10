import { web3, BN, Program } from '@coral-xyz/anchor';
import { getAssociatedTokenAddress } from '@solana/spl-token';
import { BARK_PROGRAM_ID, BARK_MINT, TOKEN_MINTS } from './config';
import { getProgramInstance } from './program';

export async function createBuyTokenTransaction(
  wallet: web3.PublicKey,
  amount: number,
  tokenType: string
) {
  if (amount <= 0) {
    throw new Error('Amount must be greater than zero.');
  }

  try {
    const program = await getProgramInstance();

    // Get the correct token mint address based on the token type
    const tokenMint = new web3.PublicKey(getTokenMintByType(tokenType));
    const barkMint = new web3.PublicKey(BARK_MINT);

    // Get the associated token addresses for the user
    const userTokenAccount = await getAssociatedTokenAddress(tokenMint, wallet);
    const userBarkAccount = await getAssociatedTokenAddress(barkMint, wallet);

    // Derive PDA for the BARK sale account
    const [barkSaleAccount] = web3.PublicKey.findProgramAddressSync(
      [Buffer.from('bark-sale-account'), wallet.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Derive PDA for the BARK sale token account
    const [barkSaleTokenAccount] = web3.PublicKey.findProgramAddressSync(
      [barkSaleAccount.toBuffer(), barkMint.toBuffer()],
      new web3.PublicKey(BARK_PROGRAM_ID)
    );

    // Convert the amount to the smallest unit (BARK token has 9 decimals)
    const amountBN = new BN(amount * 1e9);

    // Prepare the transaction with necessary accounts and instructions
    const tx = await program.methods
      .buyToken(amountBN, parseInt(tokenType)) // Pass the amount with the correct decimals
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
    console.error('Error creating transaction:', error.message);
    throw new Error(`Transaction creation failed: ${error.message}`);
  }
}

function getTokenMintByType(tokenType: string): string {
  const tokenMap: { [key: string]: string } = {
    "1": TOKEN_MINTS.USDT,
    "2": TOKEN_MINTS.USDC,
    "3": "So11111111111111111111111111111111111111112", // wSOL address
    "4": TOKEN_MINTS.PAYPAL_USD,
  };

  if (!tokenMap[tokenType]) {
    throw new Error(`Invalid token type: ${tokenType}`);
  }

  return tokenMap[tokenType];
}
