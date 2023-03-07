import { ethers } from "hardhat";

const main = async () => {
  const contractFactory = await ethers.getContractFactory("PixelNft");
  const contract = await contractFactory.deploy(
    "Pixel",
    "PIXEL",
    100,
    "0xf98a2660c606C00f9BE995D5d42E8Ff4d38d1d1c"
  );
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
