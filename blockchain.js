import Web3 from 'web3';

const web3 = new Web3('https://goerli.infura.io/v3/YOUR_INFURA_API_KEY');

export async function connectToBlockchain() {
    if (web3.eth.net.isListening()) {
        console.log('Ansluten till Ethereum blockkedja');
    } else {
        console.error('Kunde inte ansluta till Ethereum blockkedja');
    }
}

export async function getBalance(address) {
    try {
        const balance = await web3.eth.getBalance(address);
        return web3.utils.fromWei(balance, 'ether');
    } catch (error) {
        console.error('Fel vid hämtning av balans:', error);
        return 'Fel';
    }
}

export async function getBlockNumber() {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        return blockNumber;
    } catch (error) {
        console.error('Fel vid hämtning av blocknummer:', error);
        return '
