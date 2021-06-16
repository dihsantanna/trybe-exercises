const exercise1 = require('../exercise1');
const { describe, it, expect } = require('@jest/globals');

describe('Testa função generateRandomNumber', () => {
    it('Verifica retorno, chamada e quantas vezes foi chamada', () => {
        exercise1.generateRandomNumber = jest.fn()
            .mockReturnValue(10);

        expect(exercise1.generateRandomNumber).toBeCalledTimes(0);
        expect(exercise1.generateRandomNumber()).toBe(10);
        expect(exercise1.generateRandomNumber).toBeCalledTimes(1);
    });
})
