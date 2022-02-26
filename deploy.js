const HDWalletProvider = require('truffle-hdwallet-provider');
//simultaneously  specify which account we want to deploy and use as a source of ether and what api or node we are going to connect to 
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

 const provider = new HDWalletProvider(
    'surround snack portion toddler idea arch fan kiwi walnut grocery toe debate',
    'https://rinkeby.infura.io/v3/89fa897aa9aa4e88860156d1e65b331a'
 );
const web3 = new Web3(provider);// take provider pass into the web3 and get an instance of web3

const deploy = async () => {
    //get all accounts unlocked by provider
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account',accounts[0])

    await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!']})
        .send({ gas: '1000000', from: accounts[0]})
};
deploy();