import * as Utils from '../utils.js';
import launchGame from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === 0) {
    return b;
  }

  return findGcd(b % a, a);
};

const generateConditions = () => {
  const operand1 = Utils.getRangedRandomInteger(0, 100);
  const operand2 = Utils.getRangedRandomInteger(0, 100);

  return {
    question: `${operand1} and ${operand2}`,
    correctAnswer: String(findGcd(operand1, operand2)),
  };
};

export default () => {
  launchGame(RULES, generateConditions);
};
