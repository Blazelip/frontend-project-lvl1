import * as Utils from '../utils.js';
import launchGame from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const generateConditions = () => {
  const number = Utils.getRandomInteger();

  const question = number;
  const correctAnswer = isNumberEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  launchGame(RULES, generateConditions);
};
