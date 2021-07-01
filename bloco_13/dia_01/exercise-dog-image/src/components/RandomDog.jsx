import React from 'react';
import '../App.css'

const URL_API = 'https://dog.ceo/api/breeds/image/random';
const MSG_TERRIER = 'Próximo dog é um terrier por favor aperte Refresh novamente'
const regExp = /\w+-?\w*/g;

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      srcDog: '',
      name: '',
    }

    this.fetchDog = this.fetchDog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  async fetchDog() {
    this.setState({
      loading: true,
    }, async () => {
      const response = await fetch(URL_API);
      const json = await response.json();
      const message = json.message;
      this.setState({
        loading: false,
        srcDog: message,
        name: this.nameDog(message),
      }, () => {
        if (message.includes('terrier')) {
          return alert(MSG_TERRIER)
        }
    })
    })
  };

  handleClick() {
    this.fetchDog();
  }

  nameDog = (srcDog) => {
    const raceDog = srcDog.match(regExp);
    const dogName = raceDog[5].replace('-', ' ');
    const firstUpperCase = dogName[0].toLocaleUpperCase();
    return dogName.replace(dogName[0], firstUpperCase);    
  }

  componentDidMount() {
    const storage = localStorage.getItem('srcDog');
    if (!!storage) {
      return this.setState({
        srcDog: storage,
        name: this.nameDog(storage),
      });
    }
    this.fetchDog();
  
  
  }

  shouldComponentUpdate(_nextProps, { srcDog }) {
    if (srcDog.includes('terrier')) {
      return false;
    }
    localStorage.setItem('srcDog', srcDog);
    return true;
  }

  render() {
    const { srcDog, loading, name } = this.state;
    return (
      <section className="img-generator">
        <h1 className="title">Gerador de Dogs *_*</h1>
        <div className="image-container">
          { !loading || !!srcDog
          ? <img src={ srcDog } className="img-dog" alt="imagem-dog"/>
          : <span className="loading">Loading ...</span>}
        </div>
        <span>Nome : { name }</span>
        <button type="button" onClick={ this.handleClick } className="refresh" >Refresh</button>
      </section>
    );
  }
}

export default RandomDog;