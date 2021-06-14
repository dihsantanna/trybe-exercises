const { encode, decode } = require('../Exercicios_parte02_1');
const { it, describe, expect} = require('@jest/globals');

describe('Exercício 01 parte 02', () => {
    it('encode e decode devem ser funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });

    it('Chamada encode("aeiou") retorna "12345"', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    it('Chamada decode("12345") retorna "aeiou"', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    it('Chamada encode("bcdfg") retorna "bcdfg"', () => {
        expect(encode('bcdfg')).toBe('bcdfg');
    });

    it('Chamada decode("bcdfg") retorna "bcdfg"', () => {
        expect(decode('bcdfg')).toBe('bcdfg');
    });

    it('String que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        const word = 'Olá Mundo!'
        expect(encode(word).length).toBe(word.length);
        expect(decode(word).length).toBe(word.length);
    })
})