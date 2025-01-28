const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

const provider = new HDWalletProvider(
    'subway later alarm machine become object aisle two lend all negative flag',
    'https://sepolia.infura.io/v3/6d63510d0b474445a89d655bc2c609c5',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);

};

deploy();