import { connectToBlockchain, getBalance, getBlockNumber } from './blockchain.js';

document.getElementById('getBalance').addEventListener('click', async () => {
    const address = document.getElementById('addressInput').value;
    const balance = await getBalance(address);
    document.getElementById('balance').textContent = 'Balans: ' + balance + ' Ether';
});

document.getElementById('getBlocks').addEventListener('click', async () => {
    const totalBlocks = await getBlockNumber();
    document.getElementById('totalBlocks').textContent = 'Totalt Antal Block: ' + totalBlocks;
});

connectToBlockchain();
