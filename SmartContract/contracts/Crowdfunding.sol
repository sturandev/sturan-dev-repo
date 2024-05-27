// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Crowdfunding {
    string public name = "Aloa Games";
    uint256 public goal = 25000 * 10 ** 18;

    IERC20 private token;

    uint256 public totalFunds;
    bool public isGoalReached;
    bool public isClosed;
    mapping(address => uint256) public contributions;

    event Funded(address indexed user, uint256 amount);
    event Refunded(address indexed user, uint256 amount);
    event GoalReached();
    event CrowdfundingClosed();

    constructor(address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    modifier onlyWhileOpen() {
        require(!isClosed, "Crowdfunding is closed");
        _;
    }

    // Modifikasi fungsi fund untuk menggunakan transferFrom dari kontrak ERC20
    function fund(uint256 amount) external onlyWhileOpen {
        require(amount > 0, "Amount must be greater than 0");
        require(
            token.balanceOf(msg.sender) >= amount,
            "Insufficient token balance"
        );

        contributions[msg.sender] += amount;
        totalFunds += amount;

        token.transferFrom(msg.sender, address(this), amount);
        emit Funded(msg.sender, amount);

        if (totalFunds >= goal && !isGoalReached) {
            isGoalReached = true;
            emit GoalReached();
        }
    }

    function closeCrowdfunding() external onlyWhileOpen {
        isClosed = true;
        emit CrowdfundingClosed();
    }

    function refund() external onlyWhileOpen {
        require(!isGoalReached, "Goal has been reached");

        uint256 contribution = contributions[msg.sender];
        require(contribution > 0, "No contribution to refund");

        contributions[msg.sender] = 0;
        totalFunds -= contribution;

        token.transfer(msg.sender, contribution);
        emit Refunded(msg.sender, contribution);
    }

    function getDetails()
        external
        view
        returns (string memory, uint256, uint256, bool, bool)
    {
        return (name, goal, totalFunds, isGoalReached, isClosed);
    }
}
