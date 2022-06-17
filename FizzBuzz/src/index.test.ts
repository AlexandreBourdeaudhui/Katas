/**
 * Local Import
 */
import { fizzBuzz } from './index';

/**
 * Tests
 */
describe('FizzBuzz', () => {
  it('should return FizzBuzz when input is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return Fizz when input is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return Buzz when input is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return input when input is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
  });
})