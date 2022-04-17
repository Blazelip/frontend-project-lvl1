const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomInteger = () => Math.floor(Math.random() * 100);

const getRangedRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getRandomArrayItem, getRandomInteger, getRangedRandomInteger };
