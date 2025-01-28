import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    async () => {await window.web3.currentProvider.enable();}
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://sepolia.infura.io/v3/6d63510d0b474445a89d655bc2c609c5'
    );
    web3 = new Web3(provider);
}

export default web3;