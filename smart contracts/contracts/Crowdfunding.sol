// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/math/SafeCast.sol";

contract Crowdfunding is Ownable{
    using Math for uint256;
    using SafeCast for uint256;

    IERC20 public xtr;
    uint256 public goal;
    uint256 public deadline;
    uint256 public raisedAmount;
    mapping (address => uint256) public contributions;

    event GoalReached(uint256 amountRaised);
    event FundTransfer(address backer, uint256 amount, bool isContribution);

    constructor(address _tokenAddress, uint256 _goal, uint256 _duration, address initialOwner)Ownable(initialOwner){
        xtr = IERC20(_tokenAddress);
        goal = _goal;
        deadline = block.timestamp + _duration;
    }

    function contribute(uint256 _amount) external {
        require(block.timestamp < deadline, "Crowdfunding sudah berakhir");
        xtr.transferFrom(msg.sender, address(this), _amount);
        contributions[msg.sender] += _amount.toUint128();
        raisedAmount += _amount;
        emit FundTransfer(msg.sender, _amount, true);
    }

        function withdrawFunds() external onlyOwner {
        require(block.timestamp >= deadline, "Crowdfunding belum berakhir");
        require(raisedAmount >= goal, "Belum mencapai target");
        xtr.transfer(owner(), raisedAmount);
        emit GoalReached(raisedAmount);
    }

    function refund() external {
        if (block.timestamp < deadline) {
            revert("Crowdfunding belum berakhir");
        }

        if (raisedAmount >=  raisedAmount) {
            revert("Goal sudah tercapai, tidak ada pengembalian dana");
        }

        uint256 refundAmount = contributions[msg.sender];
        if (refundAmount == 0) {
            revert("Tidak ada dana yang dikembalikan");
        }

        xtr.transfer(msg.sender, refundAmount);
        contributions[msg.sender] = 0;
        raisedAmount -= refundAmount;
        emit FundTransfer(msg.sender, refundAmount, false);
    }

}