import readlineSync from 'readline-sync';
// Начало игры
console.log('brain-even\n');
console.log('Welcome to the Brain Games!');
// Запрос имени
const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();
// Приветствие по имени
export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};
// Рандомное число для игры
const getRandomInt = () => Math.floor(Math.random() * 100);
// Проверка на четность
// eslint-disable-next-line consistent-return
export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const RandomNumber = getRandomInt();
    console.log(`Question: ${RandomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');
    const answerTrue = (RandomNumber % 2 === 0) && (answerUser === 'yes');
    const answerFalse = (RandomNumber % 2 !== 0) && (answerUser === 'no');
    if (answerTrue || answerFalse) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'.\nLet's try again, ${userName}!`);
      // eslint-disable-next-line no-unreachable
      break;
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
