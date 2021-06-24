const assert = require('assert');
const books = require('./books');

//   5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(book => {
    if (book.author.birthYear > 1900 && book.author.birthYear < 2001) {
      return true;
    }
    return false;
  })
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
