import { initializeMetaMask } from './metaMask.js';
import { checkBalance } from './balance.js';
import { sendFunds } from './sendFunds.js';
import { displayLatestTransactions } from './transactionHistory.js'; 

initializeMetaMask();

document.addEventListener('DOMContentLoaded', () => {
  const accountInput = document.querySelector('#accountNumber');
  const checkBalanceButton = document.querySelector('#checkBalance');
  const displayBalance = document.querySelector('#balance');
  const blockNumberDisplay = document.querySelector('#blockNumber');
  const sendButton = document.querySelector('#sendTx');
  const toAccountInput = document.querySelector('#toAccountNumber');
  const valueInput = document.querySelector('#amount');
  const transactionList = document.querySelector('#transactionList'); 

  checkBalanceButton.addEventListener('click', async () => {
    await checkBalance(accountInput, displayBalance, blockNumberDisplay);
    await displayLatestTransactions(accountInput.value, transactionList); 
  });

  sendButton.addEventListener('click', () =>
    sendFunds(accountInput, toAccountInput, valueInput)
  );
});


export function displayTransactions(transactions, transactionList) {

  transactionList.innerHTML = '';

  
  transactions.forEach((transaction) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Tx Hash: ${transaction.hash}, Block Number: ${transaction.blockNumber}`;
    transactionList.appendChild(listItem);
  });
}
