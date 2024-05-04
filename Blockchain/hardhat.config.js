require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  networks: {
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
            accounts: ["1a6753688d53778624e3e0a4cccb820a6c2e1702bcbda4d89084d7db2d9f07e2"],
            gasPrice: 1000000000,
    },
  },
};
// 0x13cD521041BFf183c3eFc73AB45ef05C1247c207