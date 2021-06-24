const dogs = require('../exercise6');
const { describe, it, expect } = require('@jest/globals');

describe('Mocke a requisição de dogs e crie dois testes.', () => {
    describe('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed".', () => {

        const apiURL = jest.spyOn(dogs, 'fetchDogPics')
        afterEach(apiURL.mockReset);

        it('Ao resolver requisição deve-se retornar o valor "request sucess".', async () => {
            apiURL.mockResolvedValue('request sucess')

            await apiURL();
            expect(apiURL).toHaveBeenCalled();
            expect(apiURL).toHaveBeenCalledTimes(1);
            await expect(apiURL()).resolves.toBe('request sucess');
            expect(apiURL).toHaveBeenCalledTimes(2);
        });

        it('Após a requisição falhar retornar "request failed".', async () => {
            apiURL.mockRejectedValue('request failed')

            expect(apiURL).toHaveBeenCalledTimes(0);
            await expect(apiURL()).rejects.toBe('request failed')
            expect(apiURL).toHaveBeenCalledTimes(1);
        });
    });
});
