import { defineConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";

export default defineConfig({
  solidity: "0.8.28",
  networks: {
    polygonAmoy: {
      type: "http", // 
      url: process.env.RPC_URL!,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
});