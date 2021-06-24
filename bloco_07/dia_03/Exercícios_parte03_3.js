// Exercício 03
const assert = require('assert');

const greaterThanTen = (array) => {
  let results = [];
  for (let index of array) {
    if (index > 10) {
      results.push(index);
    }
  }
  return results;
}

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(typeof greaterThanTen, 'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);