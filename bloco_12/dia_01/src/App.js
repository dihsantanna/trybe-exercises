import React from 'react';
import Header from './Header';
import Pokedex from './Pokedex';
import Footer from './Footer';
import pokemons from './data';

function App() {
  return (
  <div className="App">
  <Header />
  <Pokedex pokemons={pokemons}/>
  <Footer />
  </div>
  );
}

export default App;
