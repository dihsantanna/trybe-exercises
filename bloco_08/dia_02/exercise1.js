const assert = require('assert');
const books = require('./books');

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.
function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((book) => book.author.birthYear === 1947).author.name;
}
  
  assert.strictEqual(authorBornIn1947(), 'Stephen King');
// console.log(authorBornIn1947())
