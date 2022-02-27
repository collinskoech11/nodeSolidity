pragma solidity  ^0.8.11; // specifies the solidity versionm in use 
//version identifier
contract Lottery {
    address public manager;
    address [] public players;

    constructor(){
        manager = msg.sender;//msg is a global variable  will be referenced  
    }
    function enter() public payable{
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    function random() private view returns (uint){//sha3 global varible for sha hashing algorithm 
        return  uint(keccak256(abi.encodePacked(block.timestamp, block.timestamp,  players)));
    }
    function pickWinner() public restricted{ 
        uint index = random() % players.length;//generate player winner index using modulo
        payable(players[index]).transfer(address(this).balance);// this is a refference to an instance of the current contract 
        players = new address[](0);//clear the players address array 
    }

    modifier restricted() {// modifiers help us reduce the no of lines that we write
        require(msg.sender == manager);//only the manager can cal pick winner fx
        _;
    }

    function getPlayers() public view returns(address[] memory){
        return players;
    }
}