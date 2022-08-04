// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;
import "hardhat/console.sol";

contract Counter {
    uint256 count = 0;
    event CountedTo(uint256 number);

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp() public returns (uint256) {
        uint256 newCount = count + 1;
        console.log("countUp: count =", count);

        count = newCount;
        emit CountedTo(count);

        return count;
    }

    function countDown() public returns (uint256) {
        uint256 newCount = count - 1;
        console.log("countDown: count =", count);

        count = newCount;
        emit CountedTo(count);

        return count;
    }
}
