// SPDX-License-Identifier: GPL-3.0

pragma solidity  >=0.7.0 <0.9.0;

contract Assignment{ 
    // variables
    address public developerstate = msg.sender;
    uint public likes = 0;
    struct devinfo{
        string name;
        string email;
        string url;
        address dev_address;
    }
    struct outsider{
        string comment;
        address dev_to_address;
        bool like;
    } 
    devinfo[] private devinformation;
    // functions
    function setInfo(string memory name, string memory email, string memory url, address dev_address) external {//set developer information
        devinfo memory devInfox = devinfo({name: name, email : email, url : url, dev_address: msg.sender});
        devinformation.push(devInfox);
    }
    function getDevsInfoBox() view public returns(devinfo[] memory){//get developer iformation
        return devinformation;
    }
    function setOutsiderInfo(string memory comment, address dev_to_address, bool  like) external {
        outsider memory outsiderSend = outsider({comment: comment, dev_to_address:dev_to_address, like:like});
    }
    
    function sendEtherToContract() external payable{//send ether to the smart contract

    }
    function balanceOf() external view returns(uint) {//ceck the balance of the smart contract
        return address(this).balance;
    }
    function sendEtherToDev(address payable developerstate) payable public minAmount{//send  ether to the developer who made the contract
        developerstate.transfer(msg.value);//value to be sent
    }
    // modifiers
    modifier isDev() {
        require(msg.sender == developerstate, "Caller is not a dev");
        _;
    }
    modifier minAmount() {
        require(msg.value >= 2 ether);
        _;
    }
}