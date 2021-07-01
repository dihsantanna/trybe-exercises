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
        const { myDogs } = this.state;
        if (message.includes('terrier')) {
          return alert(MSG_TERRIER)
        }
    })
    })
  };

  handleClick() {
    this.fetchDog();
    this.setState({ dogName: '' })
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
      }), () => {
        const { myDogs } = this.state;
        const jsonMyDogs = JSON.stringify(myDogs);
        localStorage.setItem('myDogs', jsonMyDogs);
      })
    }
    alert('Esse Dog já tem nome :D')    
  }

  componentDidMount() {
    const jsonMyDogs = localStorage.getItem('myDogs');
    const myDogs = JSON.parse(jsonMyDogs)
    const lastDog = myDogs.reverse();
    console.log(lastDog);
    if (!myDogs.length) {
      return this.fetchDog();      
    }
    this.setState({
      myDogs: myDogs,
      dogName: lastDog[0].name,
      srcDog: lastDog[0].src,
    }, () => this.raceDog(lastDog[0].src));
  }

  shouldComponentUpdate(_nextProps, { srcDog }) {
    if (srcDog.includes('terrier')) {
      return false;
    }
    return true;
  }
  
  componentDidUpdate(_prevProps, prevState) {
    const jsonMyDogs = JSON.stringify(prevState.myDogs);
    localStorage.setItem('myDogs', jsonMyDogs);
  }

  render() {
    const { srcDog, loading, race, dogName } = this.state;
    return (
      <section className="img-generator">
        <h1 className="title">Gerador de Dogs *_*</h1>
        <div className="image-container">
          { loading
          ? <span className="loading">Loading ...</span>
          : <img src={ srcDog } className="img-dog" alt="imagem-dog"/>}
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