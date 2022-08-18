require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "3HSDQY9FNIRNIGD63JW53AFRZ61NU56WVU",
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/170a6221b4c448b3a37b972b52ea287e",
      accounts: [
        "02f05c2da857a32e7a8e8ca6fc5b99bf2e2e975d0a3a4e1843f38b156d780001",
      ],
    },
  },
};
