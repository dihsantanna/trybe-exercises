// Exercício 03
const myRemoveWithoutCopy = require('../Exercícios_parte01 _3')
const { it, expect, describe } = require('@jest/globals');

// implemente seus testes aqui
describe('Exercício 03 Parte 01', () => {
  it('myRemoveWithoutCopy deve ser uma função', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });
  
  it('Chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorne [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) NÃO retorne [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('myRemoveWithoutCopy deve modificar o array inserido como parâmetro', () => {
    const myArr = [10, 9, 8, 7];
    myRemoveWithoutCopy(myArr, 9);
    expect(myArr).not.toEqual([10, 9, 8, 7]);
  });

  it('Chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorne [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})
