// Exercício 05
const {obj1, obj2, obj3} = require('../Exercícios_parte01_5')
const { it, expect, describe } = require('@jest/globals');

// implemente seus testes aqui
describe('Exercício 04 Parte 01', () => {
  it('obj1 deve ser igual obj2', () => {
    expect(obj1).toEqual(obj2)
  });

  it('obj3 deve ser diferente do obj1', () => {
    expect(obj3).not.toEqual(obj1);
  });
})