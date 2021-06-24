const assert = require('assert');
const books = require('./books');

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const counterA = names.reduce((acc, currentValue) => {
    const wordLower = currentValue.toLocaleLowerCase();
    const wordArr = wordLower.split('');
    acc += wordArr.reduce((counter, letter) => {
      if (letter === 'a') {
        counter += 1;
      }
      return counter;
    }, 0)
    return acc;
  }, 0)
  return counterA;
}

assert.deepStrictEqual(containsA(), 20);