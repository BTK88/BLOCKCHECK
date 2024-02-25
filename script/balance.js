
export async function checkBalance(
  accountInput,
  displayBalance,
  blockNumberDisplay
) {
  const accountNumber = accountInput.value.trim(); 

  if (!accountNumber) {
    displayErrorMessage('You need to enter a valid account number');
    return;
  }

  if (typeof ethereum !== undefined) {
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [accountNumber, 'latest'],
      });

      
      const parsedBalance = parseInt(balance) / Math.pow(10, 18);
      displayBalance.innerText = parsedBalance;

      
      const blockNumber = await ethereum.request({
        method: 'eth_blockNumber',
      });

      
      blockNumberDisplay.innerText = `Block Number: ${parseInt(
        blockNumber,
        16
      )}`; 
    } catch (error) {
      console.error(error);
      displayErrorMessage('An error occurred while fetching balance'); 
    }
  } else {
    console.log('No ethereum');
  }
}

export function displayErrorMessage(message) {
  
  throw new Error(message);
}
