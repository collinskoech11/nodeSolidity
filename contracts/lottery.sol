pragma solidity  ^0.4.17; // specifies the solidity versionm in use 
//version identifier
contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;//msg is a global variable  will be referenced  
    }
    function enter() public payable{
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
}