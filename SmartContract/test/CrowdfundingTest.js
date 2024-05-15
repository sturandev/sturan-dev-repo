const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
  let Crowdfunding;
  let crowdfunding;
  let owner, addr1, addr2, addrs;

  beforeEach(async function () {
    Crowdfunding = await ethers.getContractFactory("Crowdfunding");

    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const _duration = 600000;
    const _maxContribution = ethers.utils.parseEther("5");
    const _goal = ethers.utils.parseEther("100");

    crowdfunding = await Crowdfunding.deploy(owner.address, _duration, _maxContribution, _goal);
    await crowdfunding.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await crowdfunding.owner()).to.equal(owner.address);
    });

    it("Should initialize correctly", async function () {
      expect(await crowdfunding.token()).to.equal(owner.address); // Pastikan fungsi ini ada di kontrak
      expect(await crowdfunding.campaignDuration()).to.equal(_duration); // Sesuaikan nama fungsi berdasarkan kontrak
      expect(await crowdfunding.campaignMaxContribution()).to.equal(_maxContribution); // Sesuaikan nama fungsi berdasarkan kontrak
      expect(await crowdfunding.campaignGoal()).to.equal(_goal); // Sesuaikan nama fungsi berdasarkan kontrak
    });
  });
});
