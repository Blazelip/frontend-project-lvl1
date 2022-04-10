import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}`;
};

export default getUserName;
