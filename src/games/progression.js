import runMainGame from '../index.js';
import getRandomNum from '../utilities.js';

const gameRule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (firstNum, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNum + i * step);
  }
  return progression;
};

const task = () => {
  const startingNumber = 1;
  const lastNumber = 20;
  const lastStep = 5;
  const firstNum = getRandomNum(startingNumber, lastNumber);
  const step = getRandomNum(startingNumber, lastStep);
  const hiddenNum = getRandomNum(startingNumber, progressionLength);
  const progression = getProgression(firstNum, progressionLength, step);
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  const answer = String(firstNum + hiddenNum * step);
  return [question, answer];
};

const runProgression = () => {
  runMainGame(gameRule, task);
};

export default runProgression;
