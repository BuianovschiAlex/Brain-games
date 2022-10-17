import mainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const task = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const gameEven = () => {
  mainGame(gameRule, task);
};

export default gameEven;
