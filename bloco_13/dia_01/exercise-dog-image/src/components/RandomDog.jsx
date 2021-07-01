import React from 'react';
import HandleDogs from './HandleDogs';
import '../App.css'

const URL_API = 'https://dog.ceo/api/breeds/image/random';
const MSG_TERRIER = 'Próximo dog é um terrier por favor aperte Refresh novamente'
const regExp = /\w+-?\w*/g;

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      myDogs: [],
      loading: false,
      srcDog: '',
      dogName: '',
      race: '',
    }

    this.fetchDog = this.fetchDog.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickToSaveDog = this.clickToSaveDog.bind(this);
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
        race: this.raceDog(message),
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

  raceDog = (srcDog) => {
    const raceDog = srcDog.match(regExp);
    const dogRace = raceDog[5].replace('-', ' ');
    const firstUpperCase = dogRace[0].toLocaleUpperCase();
    return dogRace.replace(dogRace[0], firstUpperCase);    
  }

  clickToSaveDog({ inputName }) {
    const { myDogs, srcDog } = this.state;
    const containDog = myDogs.find((dog) => (dog.src === srcDog))
    if (!containDog) {
      return this.setState((prevState) => ({
        dogName: inputName,
        myDogs: [...prevState.myDogs, {
          src:prevState.srcDog,
          name: inputName,
        }]
      }))
    }
    alert('Esse Dog já tem dono :D')    
  }

  componentDidMount() {
    const storage = localStorage.getItem('srcDog');
    if (!!storage) {
      return this.setState({
        srcDog: storage,
        race: this.raceDog(storage),
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

  componentDidUpdate(prevProps, prevState) {
    
  }

  render() {
    const { srcDog, loading, race, dogName, inputName } = this.state;
    return (
      <section className="img-generator">
        <h1 className="title">Gerador de Dogs *_*</h1>
        <div className="image-container">
          { !loading || !!srcDog
          ? <img src={ srcDog } className="img-dog" alt="imagem-dog"/>
          : <span className="loading">Loading ...</span>}
        </div>
        <div className="dog-data">
          <div>Nome: { dogName }</div>
          <div>Raça: { race }</div>
        </div>
        <HandleDogs
          onClickRefresh={ this.handleClick }
          onClickSave={ this.clickToSaveDog }
        />
      </section>
    );
  }
}

export default RandomDog;