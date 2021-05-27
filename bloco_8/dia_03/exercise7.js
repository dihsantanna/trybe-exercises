const assert = require('assert');
const books = require('./books');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.filter(bookFilter => bookFilter.author.name.match(/\w\.\s\w\.\s\w\.\s/))[0].name;
};

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);