// SPDX-License-Identifier: GPL-3.0

pragma solidity  ^0.8.12; // specifies the solidity versionm in use 
//version identifier
contract Inbox {//contract definition 
// similar to class definition 
    string public message; // storage variable(Instance exists for the life of the contract ) -> accessible to anyone in the world 
    // public specifies who has access
    // message  = name of the variable 
    // local variables are thrown out after execiution dont live in the blockchain


    function inbox( string memory initialMessage )  public {// fx has the same name as contract => Constructor fx called atutomatically one time when contract is created 
        message = initialMessage;
    }
 
    function setMessage(string memory newMessage) public {//accepts 
        message = newMessage;// if it modifies the state of the contract it cannot return any value 
    }
//              fx name     fx type     return types 
    // function getMessage() public view returns (string) {
    //     return message;// no changes just accessing thus the key word view 
    // }
    
} 