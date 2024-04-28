const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("XtrModule", (m) => {
  const initialOwner = m.getParameter("initialOwner");
  const xtr = m.contract("Xtr", [initialOwner]);

  return { xtr };
});
