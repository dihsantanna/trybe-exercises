const number = require('../number');
const { describe, it, expect } = require('@jest/globals');

describe('Cria novas implementações.', () => {
    describe('Implementação deve conter três parâmetros e retornar a multiplicação dos valores.', () => {
        it('Verifica se retorna valor correto, se é chamada e quantas vezes foi chamada.', () => {
            number.generateRandomNumber = jest.fn()
                .mockImplementation((a, b, c) => a * b * c);
    
            expect(number.generateRandomNumber).toHaveBeenCalledTimes(0);
            expect(number.generateRandomNumber(2, 2, 2)).toBe(8);
            expect(number.generateRandomNumber).toHaveBeenCalled;
            expect(number.generateRandomNumber).toHaveBeenCalledTimes(1);
            expect(number.generateRandomNumber).toHaveBeenCalledWith(2, 2, 2);
        });
    })

    describe('Implementação deve receber um parâmetro e retorna seu dobro.', () => {
        it('Verifica se retorna valor correto, se é chamada e quantas vezes foi chamada.', () => {
            number.generateRandomNumber.mockReset()
                .mockImplementation((a) => a * 2);
    
            expect(number.generateRandomNumber).toHaveBeenCalledTimes(0);
            expect(number.generateRandomNumber(5)).toBe(10);
            expect(number.generateRandomNumber).toHaveBeenCalled;
            expect(number.generateRandomNumber).toHaveBeenCalledTimes(1);
            expect(number.generateRandomNumber).toHaveBeenCalledWith(5);
        });
    })
})