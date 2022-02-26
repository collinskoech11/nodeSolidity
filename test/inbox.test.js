const assert = require('assert');
const  ganache = require('ganache-cli');
const Web3 = require('web3');// cAPITAL Is a constructor function 
//assign an instance to work with variable that is lowercase for web3 
const web3 = new Web3(ganache.provider());// creates an instance Of Web3 and tells it to try to connect to the local test network for testing 


let accounts;

beforeEach(async () => {
    // Get a list of all accounts 
    accounts = await web3.eth.getAccounts()// web has many modules, in this case we'll be using the eth module
    //on the eth module we are getting the getAccounts function 
    // Almost every function that we call with web3 is an asyncronous function and returns a promise 
    // .then(fetchedAccounts => {
    //     console.log(fetchedAccounts)//displays the accounts fetched from ganache 
    // })
    // use one of the accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts)
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