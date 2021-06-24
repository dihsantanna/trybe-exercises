const assert = require('assert');
const books = require('./books');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const oldBooks = books.filter(book => (2021 - book.releaseYear >= 60));
  return oldBooks.map(book => book.name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);