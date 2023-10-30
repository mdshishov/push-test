const getSquare = (num) => num * num;

const isEven = (num) => (num % 2 === 0);

const castNumber = (value) => (Number.isNaN(Number(value)) ? 'given value is not convertable' : Number(value));

const checkType = (value) => typeof (value);

const countVowels = (text) => {
  const letters = 'aeioquyаоуыэяёюие';
  let count = 0;
  for (let i = 0; i < text.length; i += 1) {
    for (let j = 0; j < letters.length; j += 1) {
      if (text[i].toLowerCase() === letters[j]) {
        count += 1;
        break;
      }
    }
  }
  return count;
};

export {
  getSquare, isEven, castNumber, checkType, countVowels,
};
