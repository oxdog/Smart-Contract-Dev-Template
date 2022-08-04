# Smart-Contract-Dev-Template

🎉 Ethers + Hardhat + Typechain + Waffle Boilerplate 🎉

# Setup

1. Create .env from the example .env.example file
2. Go to package.json and add your Node URL to the fork command.
"fork": "npx hardhat node --fork <https://eth-mainnet.alchemyapi.io/v2/....YOUR_NODE_HERE>",

# .env Overview

````
# your favorite node provider URLs here
# referenced in hardhat.config.ts
ALCHEMY_URL_RINKEBY=  
ALCHEMY_API_RINKEBY= 
ALCHEMY_URL_MUMBAI= 
ALCHEMY_API_MUMBAI= 
ALCHEMY_URL_MAINNET= 
ALCHEMY_API_MAINNET= 

# Private Keys of Wallets 
FORK_WALLET= 👈 get with "npm run fork"
DEV_WALLET= 👈 will be used for deployment

# Gas Reporter, runs on "npm run test"
REPORT_GAS=TRUE or FALSE
COINMARKETCAP_API_KEY= 
````

# Important Commands
## ↪️ Spin up a fork network with
````
npm run fork
````
Spins up a mainnet fork on your localhost. Run for example "npm run fork-deploy" to use it.

## 🔁 Compile Solidity Files
````
npm run compile
````
Compiles type for Solidity Contract you can later import.
For example: 
````
import { Counter } from '../types/typechain/Counter'

const factory = await ethers.getContractFactory('Counter')
const contract = (await factory.deploy()) as Counter
````

## ⚠️ Console.log in Contracts
````
import "hardhat/console.sol";

console.log("Hello");
````
With hardhat you can import console.log into your Solidity file and use console.log() 🤯
It will print when you run "npm run test"

Note: Do not forget to remove it before deploying to production.

# Reach out to me
If you have any questions reach out to me on Twitter: https://twitter.com/happychubbydog


I hope the template is of as much use for you as it is for me! 

Happy Developing!🚀
