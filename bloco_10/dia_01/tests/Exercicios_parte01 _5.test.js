// Exercício 05
const {obj1, obj2} = require('../Exercícios_parte01 _5')
const { it, expect, describe } = require('@jest/globals');

// implemente seus testes aqui
describe('Exercício 04 Parte 01', () => {
  it('obj1 deve ser igual obj2', () => {
    expect(obj1).toEqual(obj2)
  });
})