const Whitelist = artifacts.require('./Whitelist.sol')
web3.eth.getTransactionReceiptMined = require("./libs/getTransactionReceiptMined.js");
const expectedExceptionPromise = require('./libs/expected_exception_testRPC_and_geth');

contract('Whitelist', function(accounts) {
  const owner = accounts[0]
  const newOwner = accounts[1]
  const okayAddress = accounts[2]
  const badAddress = accounts[3]

  let contract

  beforeEach( async () => {
    contract = await Whitelist.new({from:owner})
  })

  describe('Ownership inheritance', () => {
    it('should be owned by "owner"', async () => {
      _owner = await contract.owner({from:owner})
      assert.strictEqual(_owner, owner, "owner is not owned by 'owner'")
    })

    it('should allow owner to change ownership', async () => {
      contract.transferOwnership(newOwner, {from:owner})
      _owner = await contract.owner({from:owner})
      assert.strictEqual(_owner, newOwner, "ownership did not transfer")
    })
  })
})