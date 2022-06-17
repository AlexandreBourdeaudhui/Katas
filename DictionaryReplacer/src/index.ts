/**
 * Dictionary replacer • 
 * Replace every $word$ in input, which match with the words in dictionary object
 */
export const dictionaryReplacer = (
  input: string,
  dictionary: { [key: string]: string },
): string => {
  const words = Object.keys(dictionary);
  const regex = new RegExp(`\\$(?:${words.join('|')})\\$`, 'g');

  return input.replace(regex, (match): string => {
    const key = match.slice(1, -1);

    if (dictionary[key]) {
      return dictionary[key];
    }

    return match;
  });
};
