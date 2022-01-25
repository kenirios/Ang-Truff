// Instalación de: npm i @truffle/hdwallet-provider
//const HDWalletProvider = require('@truffle/hdwallet-provider');
// Clave secreta: 12 palabras de la Wallet
const mnemonic = "12 palabras"
module.exports = {
  networks: {
    // Ganache 
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     gas: 4500000,
     gasPrice: 10000000000,
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  contracts_build_directory: "./src/app/blockchain/",
  compilers: {
    solc: {
      version: "0.8.1",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      }
    }
  },
  db: {
    enabled: false,  
  }
};
