import { ethers } from "ethers";

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider("http://localhost:8545");
}