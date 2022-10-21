import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const startingNumber = 0;
const lastNumber = 100;

const getDivisor = (randomNum1, randomNum2) => {
  if (randomNum2 === 0) return randomNum1;
  return getDivisor(randomNum2, randomNum1 % randomNum2);
};

const getTask = () => {
  const randomNum1 = getRandomNum(startingNumber, lastNumber);
  const randomNum2 = getRandomNum(startingNumber, lastNumber);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(getDivisor(randomNum1, randomNum2));
  return [question, answer];
};

const runGcd = () => {
  runMainGame(gameRule, getTask);
};

export default runGcd;
