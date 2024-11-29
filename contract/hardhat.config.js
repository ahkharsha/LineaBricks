require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_EDU_RPC = "";
const NEXT_PUBLIC_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    bsc: {
      url: NEXT_PUBLIC_EDU_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
