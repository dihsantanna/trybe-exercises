// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const addJoker = (obj) => {
    const jokeContainer = document.querySelector('#jokeContainer');
    jokeContainer.innerHTML = obj.joke;
}
const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    
   fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((joke) => addJoker(joke));    
};

window.onload = () => fetchJoke();