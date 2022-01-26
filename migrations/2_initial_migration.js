const LipToken = artifacts.require("LipToken");
module.exports = function (deployer) {
  deployer.deploy(LipToken, "AniMons", "AMT");
};
/*
const ICO = artifacts.require("ICO");
module.exports = function (deployer) {
  deployer.deploy(ICO);};
*/