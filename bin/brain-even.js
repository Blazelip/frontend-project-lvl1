#!/usr/bin/env node

import brainGame from '../src/cli-even.js';

/*
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
*/

console.log('Welcome to the Brain Games!');
brainGame();
