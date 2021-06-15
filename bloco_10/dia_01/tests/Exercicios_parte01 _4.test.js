// Exercício 04
const myFizzBuzz = require('../Exercícios_parte01_4')
const { it, expect, describe } = require('@jest/globals');

// implemente seus testes aqui
describe('Exercício 04 Parte 01', () => {
  it('myFizzBuzz deve ser uma função', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });
  
  it('Chamada myFizzBuzz(15) retorne "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Chamada myFizzBuzz(3) retorne "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('Chamada myFizzBuzz(5) retorne "buzz"', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('Chamada myFizzBuzz(2) retorne 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('Chamada myFizzBuzz("5") retorne false', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });
  
})
