/**
 * Local Import
 */
import { fizzBuzz } from './index';

/**
 * Let's play!
 */
const letsPlay = () => {
  for (let index = 1; index <= 100; index++) {
    console.log(fizzBuzz(index));
  }
};

letsPlay();