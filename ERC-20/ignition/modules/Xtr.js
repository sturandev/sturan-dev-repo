const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

module.exports = buildModule("XtrModule", (m) => {
    const initialOwner = m.getParameter("initialOwner", "0xe1654213b35D4Da60A37d52f9236848693a4911a");

    const xtr = m.contract("Xtr", [initialOwner]);

    return { xtr };
})