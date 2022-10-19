import mainGame from '../index.js';
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
  const firstNum = getRandomNum(1, 20);
  const step = getRandomNum(1, 5);
  const hiddenNum = getRandomNum(1, progressionLength);
  const progression = getProgression(firstNum, progressionLength, step);
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  const answer = String(firstNum + hiddenNum * step);
  return [question, answer];
};

const gameProgression = () => {
  mainGame(gameRule, task);
};

export default gameProgression;
