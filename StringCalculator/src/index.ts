export const stringCalculator = (input: string): string => {
  let inputRef = input;
  let SEPARATOR = /(?:,|\n)/g;

  const customSeparatorRegex = /(?:\/\/([a-zA-Z*|,;]+)\n)/g;
  const match = customSeparatorRegex.exec(input);

  if (match) {
    const [beginCustomSeparator, delimiterSeparator] = match;
    SEPARATOR = new RegExp(`[${delimiterSeparator}]+`, 'g');
    inputRef = input.replace(beginCustomSeparator, '');
  }

  const numbers = inputRef.split(SEPARATOR);
  const negativeNumbers = numbers.filter((number) => parseInt(number, 10) < 0);

  if (negativeNumbers.length) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
  }

  return numbers.reduce((acc, item) => acc += Number(item), 0).toString();
};
