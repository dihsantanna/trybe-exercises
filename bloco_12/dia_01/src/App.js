import React from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import pokemons from './data';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Pokedex pokemons={pokemons} />
      <Footer />
      </div>
    );
  }
}

export default App;
