const path  = require('path');// path guarantees cross platform compatibility always generate a valid path
const fs =  require('fs');// file system module
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // generate path to the sol file 


// read in raw source code from the contract
const source = fs.readFileSync(inboxPath,'utf8');// specify type of encoding for inbox.sol

module.exports = solc.compile(source, 1).contracts[':Inbox'];// ensure the outputs is accessible to all files in the project
// .contracts access the contracts property 
// [:inbox] on contracts we further pull the inbox property just bytecode and interface which is our ABI 


