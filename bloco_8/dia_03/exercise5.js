const assert = require('assert');
const books = require('./books');

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const booksGenre = books.filter(book => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
  return booksGenre.map(book => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);