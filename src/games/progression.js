import * as Utils from '../utils.js';
import launchGame from '../index.js';

const MIN_PROGRESSION_ITEMS = 5;
const MAX_PROGRESSION_ITEMS = 15;

const RULES = 'What number is missing in the progression?';

const makeProgression = (start, step, length) => {
  const result = [];

  for (let i = start; result.length < length; i += step) {
    result.push(i);
  }

  return result;
};

const hideArrayItem = (array) => {
  const hiddenIndex = Utils.getRangedRandomInteger(0, array.length - 1);
  const answer = array[hiddenIndex];
  array.splice(hiddenIndex, 1, '..');

  return {
    answer,
    array,
  };
};

const generateConditions = () => {
  const progressionStart = Utils.getRangedRandomInteger(0, 100);
  const progressionStep = Utils.getRangedRandomInteger(0, 10);
  const itemsQuantity = Utils.getRangedRandomInteger(MIN_PROGRESSION_ITEMS, MAX_PROGRESSION_ITEMS);

  const progression = makeProgression(progressionStart, progressionStep, itemsQuantity);
  const { answer, array } = hideArrayItem(progression);

  return {
    question: array.join(' '),
    correctAnswer: String(answer),
  };
};

export default () => {
  launchGame(RULES, generateConditions);
};
