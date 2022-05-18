

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bw2zxfx7qmgmaGqSvgDVaLxfb1R-5itG',
      accounts: ['8782f5d8806209118691bbc924acb87ea22d061af515618c1172336a85ba0ec8'],
    },
  },
};