// // standard modules
const path = require('path')
const fs = require ('fs')

const solc = require('solc');
// We will have cross platform compatipility. 
//__dirname it used by node to take you to the root directory.
const developerPath = path.resolve(__dirname, 'contracts','developer.sol');
 //Reading the contents of the file.
 const source = fs.readFileSync(developerPath,'utf8');

// // number of sources we are compiling is one.
// module.exports = solc.compile(source,1).contracts[':Inbox'];


const input = {
    language: "Solidity",
    sources: {
      "developer.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: { 
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  // `output` here contains the JSON output as specified in the documentation
  var outputContracts = output.contracts['developer.sol']['DevProfile']

  // exports ABI interface
  module.exports.abi = outputContracts.abi;
  
  // exports bytecode from smart contract
  module.exports.bytecode = outputContracts.evm.bytecode.object;

