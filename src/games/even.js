import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startingNumber = 1;
const lastNumber = 100;

const isEven = (num) => (num % 2 === 0);

const getTask = () => {
  const question = getRandomNum(startingNumber, lastNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const runEven = () => {
  runMainGame(gameRule, getTask);
};

export default runEven;
