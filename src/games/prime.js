import mainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNum) => {
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) return false;
  }
  return randomNum > 1;
};

const task = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const gamePrime = () => {
  mainGame(gameRule, task);
};

export default gamePrime;
