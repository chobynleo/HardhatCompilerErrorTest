require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.

module.exports = {
  solidity: {
    compilers: [    
          {version: "0.7.6"},
      ],
    // version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
};
