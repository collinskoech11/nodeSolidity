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
    function random() private view returns (uint){//sha3 global varible for sha hashing algorithm 
        return  uint(keccak256(block.difficulty, now, players));
    }
    function pickWinner() public {
        require(msg.sender == manager);//only the manager can cal pick winner fx
        uint index = random() % players.length;//generate player winner index using modulo
        players[index].transfer(this.balance);// this is a refference to an instance of the current contract 
        players = new address[](0);//clear the players address array 
    }
}
}