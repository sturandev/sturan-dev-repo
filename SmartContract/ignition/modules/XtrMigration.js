const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("CrowdfundingModule", (m) => {
  const campaignName = m.getParameter("campaignName", "GameWeb3")
  const tokenAddress = m.getParameter("tokenAddress", "0xB2c86ccFBfbE235657a5d2556f2B3B1156A23283")
  const duration = m.getParameter("duration", 30 * 24 * 60 * 60);//30 hari
  const maxContribution = m.getParameter("maxContribution", ethers.getUint("100", 18))
  const goal = m.getParameter("goal", ethers.getUint("100", 18))

  const crowdfunding = m.contract("Crowdfunding", [campaignName, tokenAddress, duration, maxContribution, goal])

  return { crowdfunding }
})