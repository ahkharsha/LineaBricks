import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0x73641118e93Be1Ed8cE170E17E564Fa76b43a8fb";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "da212708ca61ceb1b91d";
export const PINATA_SECRET_KEY = "ce9bea71753244b0e67a0b3039e09889b69d15b863d25f3b9110449afae55c05";

// NETWORK
const networks = {
  linea: {
    chainId: `0x${Number(59144).toString(16)}`,
    chainName: "Linea",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.linea.build/"],
    blockExplorerUrls: ["https://lineascan.build/"],
  },
  linea_sepolia: {
    chainId: `0x${Number(59141).toString(16)}`,
    chainName: "Linea Sepolia",
    nativeCurrency: {
      name: "LineaETH",
      symbol: "LineaETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.sepolia.linea.build"],
    blockExplorerUrls: ["https://sepolia.lineascan.build/"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://sepolia.lineascan.build/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "linea_sepolia";

export const handleNetworkSwitch = async () => {
  const networkName = "linea_sepolia";
  const network = await changeNetwork({ networkName });
  return networkName;
};
