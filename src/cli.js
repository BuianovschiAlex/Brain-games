import readlineSync from 'readline-sync';
// Начало игры
console.log('brain-games');
console.log('Welcome to the Brain Games!');
// Запрос имени
const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
// Приветствие по имени
export default () => {
  console.log(`Hello, ${userName}!`);
};
