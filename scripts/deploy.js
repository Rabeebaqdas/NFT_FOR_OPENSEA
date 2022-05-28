
const hre = require("hardhat");

const main = async () => {

  const CryptoBeetles = await hre.ethers.getContractFactory("CryptoBeetles");
  const cryptobeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET");

  await cryptobeetles.deployed();

  console.log("CryptoBeetles deployed to:", cryptobeetles.address);

}
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error)
    process.exit(1);
  }
}

runMain();

