// Exercício 01
const sum = require('../Exercícios_parte01 _1');

// implemente seus testes aqui
describe('Exercício 01 Parte 01', () => {
  it('Verifica se sum é uma function', () => {
    expect('function').toEqual(typeof sum);
  });

  it('Passado os valores 4 e 5 como parâmetros deve retorna 9', () => {
    expect(9).toBe(sum(4, 5));
  });

  it('Passado os valores 0 e 0 como parâmetros deve retorna 0', () => {
    expect(0).toBe(sum(0, 0));
  });

  it('Dada a função sum é lançado um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Dada a função sum(4, "5") deve retornar a msg de erro "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow('parameters must be numbers');
  });
});
