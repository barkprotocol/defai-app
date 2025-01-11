"use client";

const ACCEPTED_TOKENS = [
  {
    symbol: "USDT",
    name: "Tether USD",
    iconUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=040",
    color: "black"
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    iconUrl: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
    color: "black"
  },
  {
    symbol: "SOL",
    name: "Solana",
    iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
    color: "black"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
    color: "black"
  }
];

export function AcceptedTokens() {
  return (
    <div>
      <h3 className="font-semibold mb-3">Accepted Tokens</h3>
      <div className="grid grid-cols-2 gap-4">
        {ACCEPTED_TOKENS.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center gap-2 p-2 rounded-md bg-white dark:bg-gray-950 dark:bg-gray-900"
          >
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <img src={token.iconUrl} alt={`${token.symbol} logo`} className="w-6 h-6 object-contain" />
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
