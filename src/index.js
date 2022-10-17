import readlineSync from 'readline-sync';

const rounds = 3;

const mainGame = (rule, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let questionsAsked = 0; questionsAsked < rounds; questionsAsked += 1) {
    const questionAndAnswer = task();
    const [askedQuestion, correctAnswer] = questionAndAnswer;
    console.log(`Question: ${askedQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default mainGame;
