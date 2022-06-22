/**
 * Local Import
 */
import { stringCalculator } from './index';

/**
 * Tests
 */
describe('stringCalculator', () => {
  it('should return 0 when empty string', () => {
    expect(stringCalculator('')).toBe('0');
  });

  it('should return the number when only one number', () => {
    expect(stringCalculator('1')).toBe('1');
  });

  it('should return the sum of two numbers', () => {
    expect(stringCalculator('1,2')).toBe('3');
  });

  it('should return the sum of multiple numbers', () => {
    expect(stringCalculator('1,2,3')).toBe('6');
  });

  it('should return the sum of multiple numbers with newline separator', () => {
    expect(stringCalculator('1\n2,3')).toBe('6');
  });

  it('should return the sum of multiple numbers with custom separator', () => {
    expect(stringCalculator('//;\n1;2')).toBe('3');
  });

  it('should return the sum of multiple numbers with custom separator (symbol)', () => {
    expect(stringCalculator('//|\n1|2|3')).toBe('6');
  });

  it('should return the sum of multiple numbers with custom separator (string)', () => {
    expect(stringCalculator('//sep\n2sep3')).toBe('5');
  });

  it('should throw an error when a negative number is found', () => {
    expect(() => stringCalculator('-1,2')).toThrow(
    'Negative numbers not allowed: -1',
    );
  });

  it('should throw an error when some negative numbers are found', () => {
    expect(() => stringCalculator('2,-4,-5')).toThrow(
    'Negative numbers not allowed: -4, -5',
    );
  });
});
 