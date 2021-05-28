const assert = require('assert');
const books = require('./books');

// 4 - Encontre o livro com o maior nome.
const expectedResult = 'As Crônicas de Gelo e Fogo';

function longestNamedBook() {
  return books.reduce((biggestName, book) => {
    if (book.name.length > biggestName.length) {
    biggestName = book.name;
    }
    return biggestName;
  }, '')
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);