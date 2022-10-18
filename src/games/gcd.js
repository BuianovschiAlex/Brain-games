import mainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (randomNum1, randomNum2) => {
  if (randomNum2 === 0) return randomNum1;
  return getCorrectAnswer(randomNum2, randomNum1 % randomNum2);
};

const task = () => {
  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(getCorrectAnswer(randomNum1, randomNum2));
  return [question, answer];
};

const gameGcd = () => {
  mainGame(gameRule, task);
};

export default gameGcd;
