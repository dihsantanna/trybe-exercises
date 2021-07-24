import React from 'react';
import './App.css';
import Digimon from './Digimon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchDigimon: '',
      isFetching: false,
      errorMessage: '',
    };
    this.inputValue = this.inputValue.bind(this);
    this.requestDigimon = this.requestDigimon.bind(this);
  }

  inputValue(value) {
    this.setState((state) => ({
      ...state,
      searchDigimon: value,
    }));
  }

  async requestDigimon() {
    const { searchDigimon } = this.state;
    const ERROR = 'ErrorMsg';
    if (searchDigimon) {
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)
        .then((res) => res.json())
        .then((results) => this.setState((state) => ({
          ...state,
          digimon: results[0],
          errorMessage: results[ERROR],
          isFetching: true,
        })));
    }
  }

  render() {
    const { digimon, searchDigimon, isFetching, errorMessage } = this.state;
    return (
      <div className="App">
        <input
          value={ searchDigimon }
          type="text"
          onChange={ ({ target }) => this.inputValue(target.value) }
          data-testid="input"
        />
        <button
          data-testid="buttonSearch"
          onClick={ this.requestDigimon }
          type="button"
        >
          Search Digimon
        </button>
        { isFetching && !errorMessage
          ? <Digimon digimon={ digimon } />
          : <h1>{errorMessage || 'Faça uma pesquisa'}</h1>}
      </div>
    );
  }
}

export default App;
