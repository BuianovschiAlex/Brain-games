import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startingNumber = 1;
const lastNumber = 100;

const isPrime = (randomNum) => {
  for (let i = 2; i < randomNum; i += 1) {
    if (randomNum % i === 0) return false;
  }
  return randomNum > 1;
};

const getTask = () => {
  const question = getRandomNum(startingNumber, lastNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  runMainGame(gameRule, getTask);
};

export default runPrime;
