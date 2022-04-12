import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getRandomInteger = () => Math.floor(Math.random() * 100);

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isNumberEven = (number) => {
  const num = Number(number);
  return num % 2 === 0;
};

const brainEven = () => {
  const name = getUserName();
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInteger();
    console.log(`Question: ${number}`);
    const answer = getUserAnswer();

    if (isNumberEven(number)) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        return;
      }
    } else if (!isNumberEven(number)) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        return;
      }
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
