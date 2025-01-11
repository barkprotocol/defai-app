/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/pda_vesting.json`.
 */
export type PdaVesting = {
  "address": "HtCmEisf9LkzJWb1C4r1MLG1zA3bwBxm1X9BNjArW1PZ",
  "metadata": {
    "name": "pdaVesting",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "buyToken",
      "discriminator": [
        138,
        127,
        14,
        91,
        38,
        87,
        115,
        105
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bark_sale_account.owner_initialize_wallet",
                "account": "initializeDataAccount"
              }
            ]
          }
        },
        {
          "name": "userTokenAccount",
          "writable": true
        },
        {
          "name": "ownerTokenAccount",
          "writable": true
        },
        {
          "name": "barkSaleTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "barkSaleAccount"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "barkMintAccount"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "userBarkAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "barkMintAccount"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "barkMintAccount"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "tokenType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "emergencyWithdraw",
      "discriminator": [
        239,
        45,
        203,
        64,
        150,
        73,
        218,
        92
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bark_sale_account.owner_initialize_wallet",
                "account": "initializeDataAccount"
              }
            ]
          }
        },
        {
          "name": "barkSaleTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "barkSaleAccount"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "barkMintAccount"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "ownerBtbAccount",
          "writable": true
        },
        {
          "name": "barkMintAccount"
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "barkSaleTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "barkSaleAccount"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "barkMintAccount"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "barkMintAccount"
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        }
      ],
      "args": [
        {
          "name": "bark",
          "type": "pubkey"
        },
        {
          "name": "usdt",
          "type": "pubkey"
        },
        {
          "name": "usdc",
          "type": "pubkey"
        },
        {
          "name": "paypalUsd",
          "type": "pubkey"
        },
        {
          "name": "ownerTokenReceiveWallet",
          "type": "pubkey"
        },
        {
          "name": "barkPrice",
          "type": "u64"
        },
        {
          "name": "vestingPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "toggleSale",
      "discriminator": [
        87,
        7,
        217,
        79,
        238,
        68,
        79,
        173
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bark_sale_account.owner_initialize_wallet",
                "account": "initializeDataAccount"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "transferAdmin",
      "discriminator": [
        42,
        242,
        66,
        106,
        228,
        10,
        111,
        156
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bark_sale_account.owner_initialize_wallet",
                "account": "initializeDataAccount"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newAdmin",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateInitialize",
      "discriminator": [
        112,
        141,
        196,
        139,
        210,
        136,
        62,
        237
      ],
      "accounts": [
        {
          "name": "barkSaleAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  116,
                  98,
                  45,
                  115,
                  97,
                  108,
                  101,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "bark_sale_account.owner_initialize_wallet",
                "account": "initializeDataAccount"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "bark",
          "type": "pubkey"
        },
        {
          "name": "usdt",
          "type": "pubkey"
        },
        {
          "name": "usdc",
          "type": "pubkey"
        },
        {
          "name": "paypalUsd",
          "type": "pubkey"
        },
        {
          "name": "ownerTokenReceiveWallet",
          "type": "pubkey"
        },
        {
          "name": "barkPrice",
          "type": "u64"
        },
        {
          "name": "vestingPrice",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "initializeDataAccount",
      "discriminator": [
        249,
        158,
        124,
        146,
        142,
        186,
        207,
        63
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized",
      "msg": "Unauthorized: Only owner can perform this action"
    },
    {
      "code": 6001,
      "name": "zeroBarkPrice",
      "msg": "BARK price must be greater than 0"
    },
    {
      "code": 6002,
      "name": "zeroVestingPrice",
      "msg": "Vesting price must be greater than 0"
    },
    {
      "code": 6003,
      "name": "invalidTokenType",
      "msg": "Invalid token type selected"
    },
    {
      "code": 6004,
      "name": "calculationError",
      "msg": "Calculation overflow occurred"
    },
    {
      "code": 6005,
      "name": "invalidTokenMint",
      "msg": "Invalid token mint address"
    },
    {
      "code": 6006,
      "name": "invalidAmount",
      "msg": "Amount must be greater than zero"
    },
    {
      "code": 6007,
      "name": "amountTooSmall",
      "msg": "Amount is too small. Minimum amount is 0.001 tokens"
    },
    {
      "code": 6008,
      "name": "amountTooLarge",
      "msg": "Amount exceeds maximum limit"
    },
    {
      "code": 6009,
      "name": "saleNotActive",
      "msg": "Sale is not currently active"
    },
    {
      "code": 6010,
      "name": "noTokensToWithdraw",
      "msg": "No tokens available to withdraw"
    },
    {
      "code": 6011,
      "name": "invalidNewAdmin",
      "msg": "Cannot transfer admin to zero address"
    }
  ],
  "types": [
    {
      "name": "initializeDataAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bark",
            "type": "pubkey"
          },
          {
            "name": "usdt",
            "type": "pubkey"
          },
          {
            "name": "usdc",
            "type": "pubkey"
          },
          {
            "name": "paypalUsd",
            "type": "pubkey"
          },
          {
            "name": "ownerTokenReceiveWallet",
            "type": "pubkey"
          },
          {
            "name": "ownerInitializeWallet",
            "type": "pubkey"
          },
          {
            "name": "barkPrice",
            "type": "u64"
          },
          {
            "name": "vestingPrice",
            "type": "u64"
          },
          {
            "name": "isSaleActive",
            "type": "bool"
          }
        ]
      }
    }
  ]
};
