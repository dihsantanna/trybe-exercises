import React from 'react';
import '../App.css'

const URL_API = 'https://dog.ceo/api/breeds/image/random';

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      srcDog: '',
    }

    this.fetchDog = this.fetchDog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  async fetchDog() {
    this.setState({
      loading: true,
    }, async () => {
      const response = await fetch(URL_API);
      const src = await response.json();
      const message = src.message;
      this.setState({
        loading: false,
        srcDog: message
      })
    })
  };

  componentDidMount() {
    this.fetchDog();
  }

  loadingCreate() {
    return (
      <span className="loading">Loading ...</span>
    );
  }

  handleClick() {
    this.fetchDog();
  }

  render() {
    const { srcDog, loading } = this.state;
    return (
      <section className="img-generator">
        <h1 className="title">Gerador de Fotos de Caninas</h1>
        <div className="image-container">
          { loading ? this.loadingCreate() : <img src={srcDog} className="img-dog"/> }
        </div>
        <button type="button" onClick={ this.handleClick } className="refresh" >Refresh</button>
      </section>
    );
  }
}

export default RandomDog;