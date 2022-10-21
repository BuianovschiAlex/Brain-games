import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const startingNumber = 1;
const lastNumber = 20;
const lastStep = 5;

const getProgression = (firstNum, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * step);
  }
  return progression;
};

const getTask = () => {
  const firstNum = getRandomNum(startingNumber, lastNumber);
  const step = getRandomNum(startingNumber, lastStep);
  const hiddenNum = getRandomNum(startingNumber, progressionLength);
  const progression = getProgression(firstNum, progressionLength, step);
  const userAnswer = progression[hiddenNum];
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  const answer = String(userAnswer);
  return [question, answer];
};

const runProgression = () => {
  runMainGame(gameRule, getTask);
};

export default runProgression;
