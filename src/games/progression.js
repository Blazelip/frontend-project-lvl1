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

const modifyProgression = (progression, hiddenIndex) => {
  const result = [...progression];
  result.splice(hiddenIndex, 1, '..');
  return result.join(' ');
};

const generateConditions = () => {
  const progressionStart = Utils.getRangedRandomInteger(0, 100);
  const progressionStep = Utils.getRangedRandomInteger(1, 10);
  const itemsQuantity = Utils.getRangedRandomInteger(MIN_PROGRESSION_ITEMS, MAX_PROGRESSION_ITEMS);

  const progression = makeProgression(progressionStart, progressionStep, itemsQuantity);
  const hiddenIndex = Utils.getRangedRandomInteger(0, progression.length - 1);

  const modifiedProgression = modifyProgression(progression, hiddenIndex);

  const question = modifiedProgression;
  const correctAnswer = String(progression[hiddenIndex]);

  return [question, correctAnswer];
};

export default () => {
  launchGame(RULES, generateConditions);
};
