const assert = require('assert');
const  ganache = require('ganache-cli');
const Web3 = require('web3');// cAPITAL Is a constructor function 
//assign an instance to work with variable that is lowercase for web3 
const web3 = new Web3(ganache.provider());// creates an instance Of Web3 and tells it to try to connect to the local test network for testing 
const {abi, bytecode} = require('../compile')

let accounts;
let inbox; 

beforeEach(async () => {
    // Get a list of all accounts 
    accounts = await web3.eth.getAccounts()// web has many modules, in this case we'll be using the eth module
    //on the eth module we are getting the getAccounts function 
    // Almost every function that we call with web3 is an asyncronous function and returns a promise 
    //  .then(fetchedAccounts => {
    //      console.log(fetchedAccounts)//displays the accounts fetched from ganache 
    //  })
    // use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract((abi))// Teaches  web3 about what methods an inbox contract has 
    .deploy({ data: bytecode, arguments: ['Hi there!'] })// Tells web3 that we want to deploy a new copy of the contract
    .send({from: accounts[0], gas: '1000000'});// Instructs web3 to send out a transaction that creates this contract 
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address)//ok method makes an assertion that the value we've passed in is ok(Is an assigned value)
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();//inbox js object repping the contract , contract has methods which is an object that contains all the fx on the contract
        assert.equal(message, 'Hi there!');
    });

    it('Can change the message', async () => {//modifying contracts data is a tx
        await inbox.methods.setMessage('Bye').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    });
});
// class Car {
//     park() {//method
//         return 'stopped';
//     }

//     drive() {//method
//         return 'start';
//     }
// }
// let car;// globally defined variable 
// beforeEach(() => {
//      car =new Car();
// });
// // string 'car' in describe the tests we are running 
// describe('Car', () => {// describe containing a bunch of it tests 
//     it('can drive', () => {
//         const car = new Car();
//         assert.equal(car.drive(), 'start');
//     });
//     it('can park', () => {
//         const car = new Car();
//         assert.equal(car.park(), 'stopped');
//     });
// });