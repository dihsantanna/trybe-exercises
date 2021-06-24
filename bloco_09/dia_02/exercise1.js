// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';


const addJoke = (obj) => {
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
    .then((joke) => addJoke(joke));    
};

window.onload = () => fetchJoke();