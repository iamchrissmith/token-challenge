const StandardToken = artifacts.require("../contracts/StandardToken.sol");

module.exports = (deployer, network) => {
  deployer.deploy(StandardToken);
};
