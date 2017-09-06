var Web3 = require('web3');
// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if its available before instantiating
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var version = web3.version.node;
console.log(version); // "Mist/v0.9.3/darwin/go1.4.1"