import { describe, it, expect } from 'vitest';
import { displayErrorMessage } from '../balance.js';

describe('displayErrorMessage', () => {
  it('should throw an error with the provided message', () => {
    const errorMessage = 'Test error message';
    expect(() => displayErrorMessage(errorMessage)).toThrowError(errorMessage);
  });
});