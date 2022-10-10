import readlineSync from 'readline-sync';

console.log('brain-games');
console.log('Welcome to the Brain Games!');
// Определение функции запроса имени
const getName = () => readlineSync.question('May I have your name? ');

const userName = getName();

// Определение функции приветствия
export default () => {
  console.log(`Hello, ${userName}!`);
};
