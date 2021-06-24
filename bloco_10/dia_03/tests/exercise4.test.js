const strings = require('../strings');
const { describe, it, expect } = require('@jest/globals');
jest.mock('../strings');

describe('Realiza novas implementações com funções do arquivo strings.js', () => {
    describe('Nova implementação para a função stringUpperCase.', () => {
        it('Função deve retornar a string em caixa baixa.', () => {
            strings.stringUpperCase
                .mockImplementation((str) => str.toLowerCase());

            expect(strings.stringUpperCase('GIT')).toBe('git');
            expect(strings.stringUpperCase).toHaveBeenCalled();
            expect(strings.stringUpperCase).toHaveBeenCalledTimes(1);
            expect(strings.stringUpperCase).toHaveBeenCalledWith('GIT');
        });
    });

    describe('Nova implementação para a função firstLetter.', () => {
        it('Função deve retornar a última letra de uma string.', () => {
            strings.firstLetter
                .mockImplementation((str) => str.charAt(str.length - 1));

            expect(strings.firstLetter('git')).toBe('t');
            expect(strings.firstLetter).toHaveBeenCalled();
            expect(strings.firstLetter).toHaveBeenCalledTimes(1);
            expect(strings.firstLetter).toHaveBeenCalledWith('git');
        });
    });

    describe('Nova implementação para função concatWords', () => {
        it('Função deve receber três strings e concatena-las', () => {
            strings.concatWords
                .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

                expect(strings.concatWords('a', 'ra', 'ra')).toBe('arara');
                expect(strings.concatWords).toHaveBeenCalled();
                expect(strings.concatWords).toHaveBeenCalledTimes(1);
                expect(strings.concatWords).toHaveBeenCalledWith('a', 'ra', 'ra');
        });
    });
});
