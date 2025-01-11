import { Program, AnchorProvider, web3 } from '@coral-xyz/anchor';
import { BARK_PROGRAM_ID } from './config';
import idl from './idl.json';
import { PublicKey } from '@solana/web3.js';

/**
 * Gets the Program instance for interacting with the Solana program.
 * @param {string} network - The network to connect to ('devnet', 'testnet', 'mainnet-beta').
 * @returns {Program} The Anchor program instance.
 * @throws {Error} Throws an error if the wallet is not connected or unavailable.
 */
export async function getProgramInstance(network: string = 'devnet'): Promise<Program<any>> {
  // Ensure that the code is running in a browser environment
  if (typeof window === 'undefined') {
    throw new Error('Window is undefined');
  }

  // Check if the Solana wallet is available in the window object (e.g., Phantom)
  if (!window.solana || typeof window.solana.connect !== 'function') {
    throw new Error('Solana wallet is not connected or unavailable');
  }

  try {
    // Attempt to connect the wallet if not already connected
    if (!window.solana.isConnected) {
      await window.solana.connect();
    }

    // Create the provider using the connected wallet
    const provider = new AnchorProvider(
      new web3.Connection(web3.clusterApiUrl(network)), // Use dynamic network URL
      window.solana,  // The Solana wallet object (e.g., Phantom)
      { commitment: 'confirmed' }
    );

    // Return the program instance with the provided IDL and program ID
    return new Program(idl as any, BARK_PROGRAM_ID, provider);
  } catch (error) {
    console.error('Error initializing program:', error);
    throw new Error(`Failed to initialize the Solana program on ${network}: ${error.message}`);
  }
}

/**
 * Helper function to switch the network dynamically.
 * @param {string} network - The network to switch to ('devnet', 'testnet', 'mainnet-beta').
 * @returns {web3.Connection} The new connection for the selected network.
 */
export function switchNetwork(network: string): web3.Connection {
  if (!['devnet', 'testnet', 'mainnet-beta'].includes(network)) {
    throw new Error('Invalid network. Valid options are "devnet", "testnet", or "mainnet-beta"');
  }

  // Return a new connection based on the selected network
  return new web3.Connection(web3.clusterApiUrl(network), 'confirmed');
}
