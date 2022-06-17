/**
 * Local Import
 */
 import { dictionaryReplacer } from './index';

/**
 * Tests
 */
describe('DictionaryReplacer', () => {
  it('should return an empty string if dict is empty', () => {
    const dict = {};
    const input = '';
    const result = dictionaryReplacer(input, dict);
    expect(result).toBe('');
  });

  it('should replace if key exists in dict', () => {
    const dict = { "temp": "temporary" };
    const input = '$temp$';
    const result = dictionaryReplacer(input, dict);
    expect(result).toBe('temporary');
  });

  it('should replace if some keys exist in dict', () => {
    const dict = { "temp": "temporary", "name": "John Doe" };
    const input = '$temp$ here comes the name $name$';
    const result = dictionaryReplacer(input, dict);
    expect(result).toBe("temporary here comes the name John Doe");
  });

  it('should dont replace if key doesnt exist in dict', () => {
    const dict = { "temp": "temporary", "name": "John Doe" };
    const input = '$temp$ here comes the name $name$ and $cat$';
    const result = dictionaryReplacer(input, dict);
    expect(result).toBe("temporary here comes the name John Doe and $cat$");
  });
});