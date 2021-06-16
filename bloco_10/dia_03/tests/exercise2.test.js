const number = require('../number');
const { describe, it, expect } = require('@jest/globals');

describe('Cria uma nova implementação, que recebe dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
    it('Verifica se nova implementação retorna algo, se é chamada e quantas vezes foi chamada', () => {
        number.generateRandomNumber = jest.fn()
            .mockImplementation((a, b) => a / b);

        expect(number.generateRandomNumber).toHaveBeenCalledTimes(0);
        expect(number.generateRandomNumber(6, 2)).toBe(3);
        expect(number.generateRandomNumber).toHaveBeenCalled;
        expect(number.generateRandomNumber).toHaveBeenCalledTimes(1);
        expect(number.generateRandomNumber).toHaveBeenCalledWith(6, 2);
    });
})