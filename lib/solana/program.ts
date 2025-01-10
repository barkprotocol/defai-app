import { Program, AnchorProvider, web3 } from '@coral-xyz/anchor';
import { BARK_PROGRAM_ID } from './config';
import idl from './idl.json';

export async function getProgramInstance() {
  if (typeof window === 'undefined') throw new Error('Window is undefined');
  
  // Check if window.solana is available and is a valid provider (like Phantom wallet)
  if (!window.solana || typeof window.solana.connect !== 'function') {
    throw new Error('Solana wallet is not connected or unavailable');
  }

  // Create the provider with the correct wallet connection
  const provider = new AnchorProvider(
    new web3.Connection(web3.clusterApiUrl('devnet')),
    window.solana,  // This should be a valid wallet provider object
    { commitment: 'confirmed' }
  );

  // Return the program instance
  return new Program(idl as any, BARK_PROGRAM_ID, provider);
}
