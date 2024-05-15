// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

contract Crowdfunding is ReentrancyGuard, Ownable{
    using Math for uint256;
    using SafeCast for uint256;

    struct Campaign {
        string campaignName;
        uint256 duration;
        uint256 maxContribution;
        uint256 start;
        uint256 goal;
        uint256 totalContributions;
        bool fundRetrived;
        mapping(address => uint256) contributions;
    }

    IERC20 public token;
    Campaign public campaign;

    constructor(string memory _campaignName, IERC20 _token, uint256 _duration, uint256 _maxContribution, uint256 _goal, address initialOwner) Ownable(initialOwner){
        transferOwnership(initialOwner);
        token = _token;
        campaign.campaignName = _campaignName;
        campaign.duration = _duration;
        campaign.maxContribution = _maxContribution;
        campaign.start = block.timestamp;
        campaign.goal = _goal;
    }

    function contribute(uint256 _amount)  external nonReentrant {
        require(block.timestamp <= campaign.start + campaign.duration, "Campagne is end");
        require(_amount <= campaign.maxContribution, "Exceeds maximum contribututon");
        require(token.transferFrom(owner(), address (this), _amount), "Transfer failed");

        require(token.allowance(owner(), address(this)) >= _amount, "Insufficient allowance");
        require(token.transferFrom(owner(), address(this), _amount), "Transfer failed");

        campaign.totalContributions += _amount;
        campaign.contributions[owner()] += _amount;
    }

    function withdrawl() external onlyOwner nonReentrant {
        require(block.timestamp > campaign.start + campaign.duration, "Campagne has not end");
        require(campaign.totalContributions >= campaign.goal, "Goal not reached");

        uint256 amount = token.balanceOf(address(this));
        require(token.transfer(owner(), amount), "Transfer failed");

        campaign.fundRetrived = true;
    }

    function refund() external nonReentrant {
        require(block.timestamp > campaign.start + campaign.duration, "Campagne has not end");
        require(campaign.totalContributions < campaign.goal, "goal was reached");
        require(!campaign.fundRetrived, "Fund has been retrived");

        uint256 contribution = campaign.contributions[msg.sender];
        require(contribution > 0, "No contribution from this address");
        require(token.transfer(msg.sender, contribution), "Transfer failed");

        campaign.contributions[msg.sender] = 0;
    }
}
