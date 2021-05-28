const assert = require('assert');
const books = require('./books');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((authors, booksArray) => {
    return `${authors}${booksArray.author.name}, `
  }, '').replace(/, $/, '.');
}
assert.strictEqual(reduceNames(), expectedResult);