const assert = require('assert');
const books = require('./books');

//   2 - Retorne o nome do livro de menor nome.
//   Dica: use a função forEach .
function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}
  
  assert.strictEqual(smallerName(), 'Duna');
