// Exercício 02
const myRemove = require('../Exercícios_parte01_2');
const { it, expect, describe } = require('@jest/globals');

// implemente seus testes aqui
describe('Exercício 02 Parte 01', () => {
  it('myRemove deve ser uma função',  () => {
    expect('function').toEqual(typeof myRemove);
  });

  it('Chamada myRemove([1, 2, 3, 4], 3) deve retornar o array [1, 2, 4]', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Chamada myRemove([1, 2, 3, 4], 3) NÃO deve retornar o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Array passado por parâmetro NÃO deve sofrer alterações', () => {
    const myArr = [10, 9, 8, 7, 6];
    myRemove(myArr, 10);
    expect(myArr).toEqual([10, 9, 8, 7, 6]);
  });

  it('Chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });

})
