export function initializeMetaMask() {
  document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', async () => {
      try {
        
        loginButton.disabled = true;
        loginButton.innerText = 'Logging in...';

       
        if (typeof window.ethereum !== 'undefined') {
          
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          alert('You are now logged in to MetaMask!');
        } else {
          alert(
            'MetaMask is not installed. Please install MetaMask to proceed.'
          );
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while logging in to MetaMask.');
      } finally {
        
        loginButton.disabled = false;
        loginButton.innerText = 'Log in to MetaMask';
      }
    });
  });
}
