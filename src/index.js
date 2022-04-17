import readlineSync from 'readline-sync';

const ROUND_NUMBER = 3;

export default (rules, conditions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rules);

  for (let i = 1; i <= ROUND_NUMBER; i += 1) {
    const { question, correctAnswer } = conditions();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
