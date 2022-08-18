const hre = require("hardhat");

async function main() {
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const mp = await Marketplace.deploy(1);

  await mp.deployed();

  console.log("nft deployed to:", mp.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
