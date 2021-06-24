const { describe, it, expect } = require('@jest/globals');
const getRepos = require('../exercise4');

// 4 - Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const URL = 'https://api.github.com/orgs/tryber/repos';
const toDoList = 'sd-01-week4-5-project-todo-list';
const memeGenerator = 'sd-01-week4-5-project-meme-generator';

describe('Verifica função getRepos', () => {

    it('Verifica se getRepos é função', () => {
        expect(typeof getRepos).toBe('function');
    });

    it('Verifica se getRepos é definido', () => {
        expect(getRepos).toBeDefined();
    });

    it('Verifica se passado url https://api.github.com/orgs/tryber/repos para a função os repositórios "sd-01-week4-5-project-todo-list" se encontra na lista retornada', async() => {
        const response = await getRepos(URL);
        expect(response.includes(toDoList)).toBe(true);
    })

    it('Verifica se passado url https://api.github.com/orgs/tryber/repos para a função os repositórios "sd-01-week4-5-project-meme-generator" se encontra na lista retornada', async() => {
        const response = await getRepos(URL);
        expect(response.includes(memeGenerator)).toBe(true);
    });
})