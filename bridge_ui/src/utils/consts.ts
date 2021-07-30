export type ChainId = 1 | 2 | 3 | 4
export const CHAIN_ID_SOLANA: ChainId = 1
export const CHAIN_ID_ETH: ChainId = 2
export const CHAIN_ID_TERRA: ChainId = 3
export const CHAIN_ID_BSC: ChainId = 4
export interface ChainInfo {
  id: ChainId
  name: string
}
export const CHAINS = [
  {
    id: CHAIN_ID_BSC,
    name: 'Binance Smart Chain'
  },
  {
    id: CHAIN_ID_ETH,
    name: 'Ethereum'
  },
  {
    id: CHAIN_ID_SOLANA,
    name: 'Solana'
  },
  {
    id: CHAIN_ID_TERRA,
    name: 'Terra'
  },
]
export const SOLANA_HOST = 'http://localhost:8899'
export const ETH_TEST_TOKEN_ADDRESS = "0x0290FB167208Af455bB137780163b7B7a9a10C16"
export const ETH_TOKEN_BRIDGE_ADDRESS = "0xe982e462b094850f12af94d21d470e21be9d0e9c"
export const SOL_TEST_TOKEN_ADDRESS = "2WDq7wSs9zYrpx2kbHDA4RUTRch2CCTP6ZWaH4GNfnQQ"
export const SOL_TOKEN_BRIDGE_ADDRESS = "B6RHG3mfcckmrYN1UhmJzyS1XX3fZKbkeUcpJe9Sy3FE"