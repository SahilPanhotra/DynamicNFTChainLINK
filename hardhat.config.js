require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
 module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.4",
      },
      {
        version: "0.8.4",
        settings: {},
      },
    ],
  },
  networks: {
    rinkeby: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
}
