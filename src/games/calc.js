import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCorrectAnswer = (randomNum1, operator, randomNum2) => {
  switch (operator) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default:
      throw new Error(`Not found this ${operator}`);
  }
};

const task = () => {
  const startingNumber = 0;
  const lastNumber = 100;
  const randomNum1 = getRandomNum(startingNumber, lastNumber);
  const randomNum2 = getRandomNum(startingNumber, lastNumber);
  const randomOperator = operators[getRandomNum(startingNumber, operators.length)];

  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const answer = String(getCorrectAnswer(randomNum1, randomOperator, randomNum2));
  return [question, answer];
};

const runCalc = () => {
  runMainGame(gameRule, task);
};

export default runCalc;
