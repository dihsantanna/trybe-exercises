const { describe, it, expect } = require('@jest/globals');
const getUserName = require('../users');


// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('Verifica a função getUserName', () => {
    it('Verifica se getUserName é uma função', () => {
        expect(typeof getUserName).toBe('function');
    });

    it('Verifica se getUserName é definida', () => {
        expect(getUserName).toBeDefined();
    });

    it('Ao passar a id: 4 como parâmetro retorne "Mark"', () => {
        expect.assertions(1);
        return expect(getUserName(4)).resolves.toBe('Mark');
    });

    it('Ao passar a id: 6 como parâmetro retorne o objeto { error: "User with 6 not found." }', () => {
        expect.assertions(1);
        return expect(getUserName(6)).rejects.toEqual({ error: "User with 6 not found." });
    })
})