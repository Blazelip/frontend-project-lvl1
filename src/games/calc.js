import * as Utils from '../utils.js';
import launchGame from '../index.js';

const MATH_SIGNS = ['+', '-', '*'];

const RULES = 'What is the result of the expression?';

const calcExpression = (operand1, operand2, sign) => {
  switch (sign) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`Unexpected operation - '${sign}'`);
  }
};

const generateConditions = () => {
  const operand1 = Utils.getRangedRandomInteger(0, 100);
  const operand2 = Utils.getRangedRandomInteger(0, 100);
  const mathSign = Utils.getRandomArrayItem(MATH_SIGNS);

  const question = `${operand1} ${mathSign} ${operand2}`;
  const correctAnswer = String(calcExpression(operand1, operand2, mathSign));

  return [question, correctAnswer];
};

export default () => {
  launchGame(RULES, generateConditions);
};
