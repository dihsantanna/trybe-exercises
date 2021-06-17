// 6 - Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

const fetch = require('node-fetch');
const URL_API = 'https://dog.ceo/api/breeds/image/random'


const fetchDogPics = async () => {
    try {
        const response = await fetch(URL_API);
        const json = await response.json();
        const img = await json.message;
        return img;
    } catch(error) {
        return error;
    }
}

module.exports = { fetchDogPics };