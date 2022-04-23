import * as Utils from '../utils.js';
import launchGame from '../index.js';

const NUMBER_LIMIT = 1000;
const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateConditions = () => {
  const number = Utils.getRangedRandomInteger(0, NUMBER_LIMIT);

  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  launchGame(RULES, generateConditions);
};
