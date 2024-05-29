// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ClaimToken {
    IERC20 public xtrToken;
    uint256 public constant MAX_CLAIM_AMOUNT = 1000 * 10 ** 18;
    mapping(address => bool) public hasClaimed;
    address[] public claimers;
    bool public isOwner;

    constructor(address _xtrTokenAddress) {
        xtrToken = IERC20(_xtrTokenAddress);
    }

    modifier onlyOwner(){
        require(!isOwner, "Only owner address can perform this function");
        _;
    }

    function claimXTR() external {
        require(!hasClaimed[msg.sender], "You have already claimed XTR Token");
        require(xtrToken.balanceOf(address(this)) >= MAX_CLAIM_AMOUNT, "Insufficient XTR tokens available for claim");

        hasClaimed[msg.sender] = true;
        claimers.push(msg.sender);
        xtrToken.transfer(msg.sender, MAX_CLAIM_AMOUNT);
    }

    function transferXTRContract(uint256 _amount) external onlyOwner {
        require(_amount > 0, "Transfer must be greater than 0");
        require(xtrToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
    }
}
