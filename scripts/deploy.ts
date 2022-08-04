import { ethers } from 'hardhat'
import { Counter } from '../types/typechain/Counter'

async function main() {
  const factory = await ethers.getContractFactory('Counter')
  const contract = (await factory.deploy()) as Counter

  console.log(contract.address)
  console.log(contract.deployTransaction.hash)

  await contract.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
