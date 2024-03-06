const { getAccountBalance } = require('../balance');

jest.mock('web3', () => ({
  eth: {
    getBalance: jest.fn(address => Promise.resolve('1000000000000000000')) 
  }
}));

describe('getAccountBalance', () => {
  it('fetches and returns the balance of an Ethereum account', async () => {
    const address = '0x123';
    const balance = await getAccountBalance(address);
    expect(balance).toBe('1'); 
  });
});
