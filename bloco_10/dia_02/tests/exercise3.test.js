const { describe, it, expect } = require('@jest/globals');
const getUserName = require('../users');

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('Verifica a função getUserName', () => {
    it('Verifica se getUserName é uma função', () => {
        expect(typeof getUserName).toBe('function');
    });

    it('Verifica se getUserName é definida', () => {
        expect(getUserName).toBeDefined();
    });

    it('Ao passar a id: 4 como parâmetro retorne "Mark"', async() => {
        await expect(getUserName(4)).resolves.toBe('Mark');
    });

    it('Ao passar a id: 6 como parâmetro retorne o objeto { error: "User with 6 not found." }', async() => {
        expect.assertions(1);
        await expect(getUserName(6)).rejects.toEqual({ error: "User with 6 not found." });
    });
})