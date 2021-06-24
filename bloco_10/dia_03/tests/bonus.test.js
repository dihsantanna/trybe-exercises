const { fetchJoke } = require('../bonus');
const { describe, it, expect } = require('@jest/globals');
const fetch = require('node-fetch');

jest.mock('node-fetch');

const fetchFake = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200
}

describe('Testa função fetchJoker', () => {
    describe('Testa resultado específico', () => {
        it('Função após resolver deve retornar fetchFake', async () => {

            expect.assertions(1);

            fetch.mockImplementation(async () => {
                return {
                    json: async () => fetchFake,
                }
            });
            
            expect(await fetchJoke()).toBe('Whiteboards ... are remarkable.')
        })
    })
})