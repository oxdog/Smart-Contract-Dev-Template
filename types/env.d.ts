declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_DEV_URL_RINKEBY: string
      ALCHEMY_DEV_API_RINKEBY: string
      ALCHEMY_DEV_URL_MUMBAI: string
      ALCHEMY_URL_MAINNET: string
      ALCHEMY_API_MAINNET: string
      FORK_WALLET_KEY: string
      DEV_WALLET: string
      ECHO3_OPENSEA_WALLET: string
      REPORT_GAS: boolean
      COINMARKETCAP_API_KEY: string
    }
  }
}

export {}
