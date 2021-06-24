const strings = require('../strings');
const { describe, it, expect } = require('@jest/globals');

describe('Realiza nova implementação', () => {
    describe('Nova implementação para a função stringUpperCase.', () => {
        it('Função deve retornar a string em caixa baixa.', () => {
            jest.spyOn(strings, 'stringUpperCase')
                .mockImplementation((str) => str.toLowerCase());

            expect(strings.stringUpperCase('GIT')).toBe('git');
            expect(strings.stringUpperCase).toHaveBeenCalled();
            expect(strings.stringUpperCase).toHaveBeenCalledTimes(1);
            expect(strings.stringUpperCase).toHaveBeenCalledWith('GIT');

            strings.stringUpperCase.mockRestore();

            expect(strings.stringUpperCase('git')).toBe('GIT');
        });
    });
});
