"use client";

const ACCEPTED_TOKENS = [
  {
    symbol: "USDT",
    name: "Tether USD",
    color: "black"
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    color: "black"
  },
  {
    symbol: "SOL",
    name: "Solana",
    color: "black"
  }
];

export function AcceptedTokens() {
  return (
    <div>
      <h3 className="font-semibold mb-3">Accepted Tokens</h3>
      <div className="grid grid-cols-2 gap-4">
        {ACCEPTED_TOKENS.map((token) => (
          <div key={token.symbol} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
            <div className={`w-8 h-8 rounded-full bg-${token.color}-500/10 flex items-center justify-center`}>
              <span className={`text-sm font-medium text-${token.color}-500`}>$</span>
            </div>
            <div>
              <p className="font-medium">{token.symbol}</p>
              <p className="text-xs text-muted-foreground">{token.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}