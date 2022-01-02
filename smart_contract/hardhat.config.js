// https://eth-ropsten.alchemyapi.io/v2/wD9KPW2MLoOMCYvyaBTVmNg3csw__5-N

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wD9KPW2MLoOMCYvyaBTVmNg3csw__5-N',
      accounts: ['00f8cd319a6e07f9c921b3ab315f11281a81ad501eddbb6fc2364ef21388d46f'],
    },
  },
};