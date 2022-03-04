//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract DevProfile{// contract definition 

    address public developer;// get developer address/
    address[] private outsider;//set outsider address
     struct dev{// struct to hold dev info 
        string name;// store the name of the developer 
        string job_email;// store the job email of the developer 
        string url;// stores the url to the profile of the developer 
    }
    dev[] private devs;// store dev details as an array 
    string[] comment;// declare comment variable
    uint private amount = 1 ether;//initial amount
   
    //events
    event likeadded();// store added likes 
    event commentsadded();// store added comments 



    //modifiers => avoids repetitive code 
    modifier isDev() {//check if user calling the fx is a a dev 
        require(msg.sender == developer, "Cant add info if not a dev");// render err message if the user is not a developer
        _;
    }
    modifier Outsider{//check if user calling the fx is an outsider 
       require(msg.value >= 2 ether && msg.sender != developer,"For you to like or comment you have to send the developer 2 ether or more.You cant like your own profile.");
       // render err message if the user is not an outsider or has set the value of ether to be sent as less than two 
       payable(developer).transfer(amount);//value must be greater than 2 ether
       _;
    }


    //construct
    constructor(){//executed only once when the contract instance is created 
       developer = msg.sender;// set deployer of the contract as developer 
    }

    //fuctions

    function addinfo(string memory _name, string memory _jobemail, string memory _url) public isDev{// fx to save dev info
           dev memory devinfo = dev({name: _name, job_email: _jobemail, url: _url});// different fields to be saved 
           devs.push(devinfo);// pushes the dev info to the devs array
    }
    
    function getDevinfo() view public isDev returns(dev[] memory, string[] memory, uint likes) {// display developer info including likes and comments 
          return (devs,comment,outsider.length); // display the dev information + comments + no of likes 
    }

    function getDevDetail() view public returns(dev[] memory){// get developer profile details 
        return devs;// returns dev info 
    }
    
    function like() public payable Outsider{// adds new likes 
       emit likeadded();
       outsider.push(msg.sender);//pushes address of the sender of the outsider liking the dev profile  to the likeadded event
    }

    function comments(string memory _comment) public payable Outsider{ // saves the new comment 
         emit commentsadded();    
         comment.push(_comment);//pushes the added comment to the commentsadded event 
    }
    
    

}