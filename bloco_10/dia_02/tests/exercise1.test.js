const { describe, it, expect } = require('@jest/globals');
const uppercase = require('../exercise1');

// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

describe('Teste que verifica a chamada do callback de uma função uppercase', () => {
    it('Verifica se uppercase é uma função', () => {
        expect(typeof uppercase).toBe('function');
    });

    it('Verifica se uppercase é definida', () => {
        expect(uppercase).toBeDefined();
    });

    it('Verifica se passada string "maravilhoso" como parâmetro e uma callback à converte para a string "MARAVILHOSO"', (done) => {
        uppercase('maravilhoso', (str) => {
            expect(str).toBe('MARAVILHOSO');
            done();
        });
    });

    it('Verifica se passada string "MARAVILHOSO" como parâmetro e uma callback a string NÃO é convertida para "maravilhoso"', (done) => {
        uppercase('MARAVILHOSO', (str) => {
            expect(str).not.toBe('maravilhoso');
            done();
        })
    });
});