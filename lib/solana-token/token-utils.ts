import { PAYMENT_TOKENS, TokenType } from './constants';

/**
 * Fetches token details based on the provided token type.
 * @param tokenType - The token type key (e.g., "1" for USDT, "2" for USDC)
 * @returns TokenType - The token object containing mint address and label.
 * @throws Error if the provided token type is invalid or does not exist in the PAYMENT_TOKENS.
 */
export function getTokenByType(tokenType: keyof typeof PAYMENT_TOKENS): TokenType {
  const token = PAYMENT_TOKENS[tokenType];
  
  // Validate if the token exists in the PAYMENT_TOKENS object
  if (!token) {
    throw new Error(`Invalid token type: ${tokenType}. Please check the token type.`);
  }

  return token;
}

// Example of usage:
try {
  const token = getTokenByType("3");  // Returns the token details for SOL
  console.log(token.mint.toBase58()); // Prints SOL mint address
} catch (error) {
  console.error(error.message);  // Logs error message if the token type is invalid
}
