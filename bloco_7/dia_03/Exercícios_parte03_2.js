// Exercício 02
const assert = require('assert');

const removeVowels = (word) => {
  let result = '';
  let counter = 0;

  for (const index of word) {
    if (
      index === 'a' ||
      index === 'o' ||
      index === 'i' ||
      index === 'e' ||
      index === 'u'
    ) {
      counter += 1
      result += counter;
    } else {
      result += index;
    }
  }
  return result;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(removeVowels(parameter), result);