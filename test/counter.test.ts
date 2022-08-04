import { ethers } from 'hardhat'
import chai from '../scripts/chaisetup'
import { Counter } from '../types/typechain-types/Counter'

const { expect } = chai

describe('Counter', () => {
  let counter: Counter

  beforeEach(async () => {
    const signers = await ethers.getSigners()

    const counterFactory = await ethers.getContractFactory(
      'Counter',
      signers[0]
    )
    counter = (await counterFactory.deploy()) as Counter
    const initCount = await counter.getCount()

    expect(initCount).to.equal(0)
    expect(counter.address).to.properAddress
  })

  describe('Count Up', () => {
    it('should count one up', async () => {
      await counter.countUp()
      const count = await counter.getCount()
      expect(count).to.equal(1)
    })
  })

  describe('Count down', () => {
    it('should fail counting down from 0', async () => {
      return expect(await counter.countDown()).to.be.rejected
    })

    it('should count down from 1', async () => {
      expect(await counter.getCount()).to.equal(0)
      await counter.countUp()
      expect(await counter.getCount()).to.equal(1)
      await counter.countDown()
      expect(await counter.getCount()).to.equal(0)
    })
  })
})
