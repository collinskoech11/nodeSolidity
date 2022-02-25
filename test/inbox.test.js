const assert = require('assert');
const  ganache = require('ganache-cli');
const Web3 = require('web3');// cAPITAL Is a constructor function 

//assign an instance to work with variable that is lowercase for web3 
const web3 = new Web3(ganache.provider());// creates an instance Of Web3 and tells it to try to connect to the local test network for testing 