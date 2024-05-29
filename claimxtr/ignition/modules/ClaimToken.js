const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ClaimTokenModule", (m) => {
  const xtrAddrees = "0xB2c86ccFBfbE235657a5d2556f2B3B1156A23283";
  const claimXtr = m.contract("ClaimToken", [xtrAddrees]);
  return { claimXtr };
});
