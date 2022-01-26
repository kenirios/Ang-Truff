// Instalación de: npm i @truffle/hdwallet-provider
//const HDWalletProvider = require('@truffle/hdwallet-provider');
// Clave secreta: 12 palabras de la Wallet
var path = require('path');
const mnemonic = "12 palabras"
module.exports = {

  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
  },

  contracts_directory: './contracts/',
  contracts_build_directory: './src/app/blockchain/',

  compilers: {
    solc: {
     version:'^0.8.1',
     optimizer:{
       enabled:'true',
       runs: 200
     }
    }
  },
};
