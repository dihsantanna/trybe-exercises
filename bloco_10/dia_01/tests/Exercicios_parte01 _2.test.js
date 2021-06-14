// Exercício 02
const myRemove = require('../Exercícios_parte01 _2');

// implemente seus testes aqui
assert.deepStrictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ]);

const myArr = [10, 9, 8, 7, 6];
myRemove(myArr, 10);
assert.deepStrictEqual(myArr, [10, 9, 8, 7, 6]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])