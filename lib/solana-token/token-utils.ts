import { PAYMENT_TOKENS, TokenType } from './constants';

/**
 * Fetches token details based on the provided token type.
 * @param tokenType - The token type key (e.g., "1" for USDT, "2" for USDC)
 * @returns TokenType - The token object containing mint address and label
 * @throws Error if the provided token type is invalid
 */
export function getTokenByType(tokenType: keyof typeof PAYMENT_TOKENS): TokenType {
  const token = PAYMENT_TOKENS[tokenType];
  if (!token) {
    throw new Error("Invalid token type");
  }
  return token;
}

// Example of usage:
const token = getTokenByType("2");  // Returns the token details for USDC
console.log(token.mint.toBase58()); // Prints USDC mint address
