import mainGame from '../index.js';
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
      return `Not found this ${operator}`;
  }
};

const task = () => {
  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);
  const randomOperator = operators[getRandomNum(0, operators.length)];

  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const answer = String(getCorrectAnswer(randomNum1, randomOperator, randomNum2));
  return [question, answer];
};

const gameCalc = () => {
  mainGame(gameRule, task);
};

export default gameCalc;
