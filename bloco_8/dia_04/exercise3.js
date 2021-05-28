const assert = require('assert');
const books = require('./books');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  const totalAge = books.reduce((acc, books) => {
    const age = books.releaseYear - books.author.birthYear;
    acc += age;
    return acc;
  }, 0)
  return totalAge / books.length;
}

assert.strictEqual(averageAge(), expectedResult);