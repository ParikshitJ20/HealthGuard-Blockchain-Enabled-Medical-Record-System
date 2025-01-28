import web3 from './web3';
import Record from './build/Record.json';

const instance = new web3.eth.Contract(
    JSON.parse(Record.interface),
    '0x9a3aA99b97dAf1d79210C4cAC5E494Af06b8B1fC' 
);

export default instance;
