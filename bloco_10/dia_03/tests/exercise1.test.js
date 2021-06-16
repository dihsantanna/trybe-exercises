const number = require('../number');
const { describe, it, expect } = require('@jest/globals');

describe('Testa função generateRandomNumber', () => {
    it('Verifica retorno, chamada e quantas vezes foi chamada', () => {
        number.generateRandomNumber = jest.fn()
            .mockReturnValue(10);

        expect(number.generateRandomNumber).toHaveBeenCalledTimes(0);
        expect(number.generateRandomNumber()).toBe(10);
        expect(number.generateRandomNumber).toHaveBeenCalled;
        expect(number.generateRandomNumber).toHaveBeenCalledTimes(1);
    });
})
