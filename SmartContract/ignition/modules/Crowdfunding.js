const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("CrowdfundingModule", (m) => {
  const xtrAddress = "0xB2c86ccFBfbE235657a5d2556f2B3B1156A23283";
  const crowdfunding = m.contract("Crowdfunding", [xtrAddress]);
  return { crowdfunding };
});
