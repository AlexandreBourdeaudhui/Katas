/**
 * Local Import
 */
import { isLeapYear } from './index';

/**
 * Tests
 */
describe('isLeapYear', () => {
  it('1700 should not be a leap year', () => {
    expect(isLeapYear(1700)).toBe(false);
  })

  it('1800 should not be a leap year', () => {
    expect(isLeapYear(1800)).toBe(false);
  })

  it('1900 should not be a leap year', () => {
    expect(isLeapYear(1900)).toBe(false);
  })

  it('1996 should be a leap year', () => {
    expect(isLeapYear(1996)).toBe(true);
  })

  it('2000 should be a leap year', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it('2008 should be a leap year', () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  it('2012 should be a leap year', () => {
    expect(isLeapYear(2012)).toBe(true);
  });

  it('2016 should be a leap year', () => {
    expect(isLeapYear(2016)).toBe(true);
  });

  it('2017 should not be a leap year', () => {
    expect(isLeapYear(2017)).toBe(false);
  });

  it('2018 should not be a leap year', () => {
    expect(isLeapYear(2018)).toBe(false);
  });

  it('2019 should not be a leap year', () => {
    expect(isLeapYear(2019)).toBe(false);
  });
});