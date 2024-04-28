const { expect } = require("chai");
const { ethers } = require("hardhat"); // Menggunakan destructuring untuk mengimpor ethers

describe("Crowdfunding", function () {
  let Crowdfunding;
  let crowdfunding;
  let owner, addr1, addr2, addrs;

  beforeEach(async function () {
    Crowdfunding = await ethers.getContractFactory("Crowdfunding");

    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const _duration = 600000;
    const _maxContribution = ethers.utils.parseEther(5);
    const _goal = ethers.utils.parseEther(100);

    crowdfunding = await Crowdfunding.deploy(owner.address, _duration, _maxContribution, _goal);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await crowdfunding.owner()).to.equal(owner.address);
    });

    it("Should initialize correctly", async function () {
      expect(await crowdfunding.token()).to.equal(owner.address);
      expect(await crowdfunding.campaign.duration).to.equal(1000);
      expect(await crowdfunding.campaign.maxContribution).to.equal(100);
      expect(await crowdfunding.campaign.goal).to.equal(ethers.utils.parseEther(10));
    });
  
  });
});
