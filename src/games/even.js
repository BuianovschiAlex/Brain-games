import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const task = () => {
  const startingNumber = 1;
  const lastNumber = 100;
  const question = getRandomNum(startingNumber, lastNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const runEven = () => {
  runMainGame(gameRule, task);
};

export default runEven;
