const path  = require('path');// path guarantees cross platform compatibility always generate a valid path
const fs =  require('fs');// file system module
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol'); // generate path to the sol file 


// read in raw source code from the contract
const source = fs.readFileSync(inboxPath,'utf8');// specify type of encoding for inbox.sol

var input = {
    lanuage: 'Solidity',
    sources: {
        "inbox.sol":{
            content: source,
        },
    },
    settings: {
        outPutSElection: {
            "*": {
                "*":["*"],
            },
        },
    },
};
var output = JSON.parse(solc.compile(JSON.stringify(input)));
var outputContracts = output.contracts['inbox.sol']['Inbox']

module.exports.abi = outputContracts.abi//exports the abi
module.exports.bytecode = outputContracts.evm.bytecode.object
// .contracts access the contracts property 
// [:inbox] on contracts we further pull the inbox property just bytecode and interface which is our ABI 


