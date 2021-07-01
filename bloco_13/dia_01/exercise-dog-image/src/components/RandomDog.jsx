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
      const json = await response.json();
      const message = json.message;
      this.setState({
        loading: false,
        srcDog: message
      }, () => {
        if (message.includes('terrier')) {
          alert('É um terrier por favor aperte Refresh novamente')
      }
    })
    })
  };

  handleClick() {
    this.fetchDog();
  }

  localStorageSave = (srcDog) => {
    localStorage.setItem('srcDog', srcDog);
  }

  localStorageLoad = () => {
    const storage = localStorage.getItem('srcDog');
    if (!!storage) {
      this.setState({ srcDog: storage });
      return true;
    }
    return false;
  }

  alertDog = () => {
    const { srcDog, loading } = this.state;
    this.regExp = /\w+-?\w*/g;
    const raceDog = srcDog.match(this.regExp);
    const dogName = raceDog ? raceDog[5].replace('-', ' ') : false;
    if(!!dogName && !loading) {
      const firstUpperCase = dogName[0].toLocaleUpperCase();
      const msg = dogName.replace(dogName[0], firstUpperCase);
      alert(msg);
    }
  }

  componentDidMount() {
    if (!this.localStorageLoad()) {
      this.fetchDog();
    }    
  }

  shouldComponentUpdate(_nextProps, { srcDog }) {
    if (srcDog.includes('terrier')) {
      return false;
    }
    this.localStorageSave(srcDog);
    return true;
  }

  componentDidUpdate(_prevProps, { srcDog }) {
    this.alertDog();
  }

  render() {
    const { srcDog, loading } = this.state;
    return (
      <section className="img-generator">
        <h1 className="title">Gerador de Fotos de Caninas</h1>
        <div className="image-container">
          { !loading || !!srcDog
          ? <img src={ srcDog } className="img-dog" alt={ srcDog.match(this.regExp)[5] } />
          : <span className="loading">Loading ...</span>}
        </div>
        <button type="button" onClick={ this.handleClick } className="refresh" >Refresh</button>
      </section>
    );
  }
}

export default RandomDog;