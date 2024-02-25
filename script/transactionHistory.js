import { displayTransactions } from './app.js';


export async function displayLatestTransactions(
  accountNumber,
  transactionList
) {
  try {
    
    const response = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${accountNumber}&apikey=N23922SPXIH15G5CVHCB1QVYXCVX1GEKVI`
    );
    const data = await response.json();

    if (data.status === '1') {
      const transactions = data.result;
      displayTransactions(transactions, transactionList); 
    } else {
    
      console.error('Error fetching transaction history:', data.message);
    }
  } catch (error) {
    console.error('Error fetching transaction history:', error);
  }
}
