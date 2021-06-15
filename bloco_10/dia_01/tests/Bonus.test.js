const { searchEmployee, professionalBoard } = require('../Bonus');
const { it, describe, expect } = require('@jest/globals');

describe('Exercício Bônus', () => {
  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Verifica se função searchEmployee é definida', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBeDefined();
  });

  it('Dado id: "5569-4" e informação: "firstName" como parâmetro para a função searchEmployer retorne a informação consultada (return "George")', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
  });

  it('Dado id: "5231-5" e informação: "firstName" como parâmetro para a função searchEmployer retorne o erro "ID não identificada" ', () => {
    expect(() => {
      searchEmployee('5231-5', 'firstName');
    }).toThrow('ID não identificada');
  });

  it('Dado id: "5569-4" e informação: "fullName" como parâmetro para a função searchEmployer retorne o erro "Informação indisponível" ', () => {
    expect(() =>{
      searchEmployee('5569-4', 'fullName');
    }).toThrow('Informação indisponível');
  });

})
