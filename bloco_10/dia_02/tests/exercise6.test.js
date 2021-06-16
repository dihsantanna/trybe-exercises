const { describe, it, expect } = require('@jest/globals');
const { findAnimalByAge, getAnimal } = require('../exercise6');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });
  
  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com a idade procurada', () => {
      it('Retorne um array como o objeto do animal', async() => {
        await expect(findAnimalByAge(5)).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });

    describe('Quando NÃO existe o animal com a idade procurada', () => {
      it('Retorna um erro', async() => {
        await expect(findAnimalByAge(3)).rejects.toBe('Nenhum animal com essa idade!');
      })
    })
  })