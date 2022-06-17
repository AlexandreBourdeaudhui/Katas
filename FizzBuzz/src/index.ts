/**
 * Fizz Buzz
 */
export const fizzBuzz = (input: number): string | number => {
  let fooBar = '';

  if (input % 3 === 0) {
    fooBar += "Fizz";
  }

  if (input % 5 === 0) {
    fooBar += "Buzz";
  }

  // Result
  if (fooBar) {
    return fooBar;
  }

  return input;
}

/**
 * Let's play!
 */
const letsPlay = () => {
  for (let index = 1; index <= 100; index++) {
    console.log(fizzBuzz(index));
  }
};

letsPlay();