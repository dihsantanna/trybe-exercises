import React from 'react';
import HandleDogs from './HandleDogs';
import DogRender from './DogRender';
import SaveDogBar from './SaveDogBar';
import { fetchDog, URL_ERROR } from '../services/api';
import '../App.css';

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

    this.requestService = this.requestService.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickToSaveDog = this.clickToSaveDog.bind(this);
    this.getDog = this.getDog.bind(this);
    this.raceDog = this.raceDog.bind(this);
  }
  
  async requestService() {
    this.setState({
      loading: true,
    }, async () => {
      const request = await fetchDog()
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        srcDog: request,
        race: this.raceDog(request),
      }));
    });
  };

  handleClick() {
    this.requestService();
    this.setState((prevState) => ({ ...prevState, dogName: '' }))
  }

  raceDog(srcDog) {
    if (srcDog === URL_ERROR) return 'Error';
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
        ...prevState,
        dogName: inputName,
        myDogs: [{
          src:prevState.srcDog,
          name: inputName,
        }, ...prevState.myDogs]
      }), () => {
        const { myDogs } = this.state;
        const jsonMyDogs = JSON.stringify(myDogs);
        localStorage.setItem('myDogs', jsonMyDogs);
      })
    }
    alert('Esse Dog já tem nome :D')    
  }

  getDog({ setName, setSrc }) {
    if (!!setName && !!setSrc ) {
      this.setState((state) => ({
        ...state,
        srcDog: setSrc,
        dogName: setName,
        race: this.raceDog(setSrc),
      }))
    }
  }

  componentDidMount() {
    const jsonMyDogs = localStorage.getItem('myDogs');
    const myDogs = JSON.parse(jsonMyDogs)
    const lastDog = myDogs ? myDogs.reverse() : [];
    if (!!myDogs) {
      return this.setState({
        myDogs: myDogs,
        dogName: lastDog[0].name,
        srcDog: lastDog[0].src,
        race: this.raceDog(lastDog[0].src)
      });   
    }
    this.requestService(); 
  }

  render() {
    const { srcDog, loading, race, dogName, myDogs } = this.state;
    return (
      <main>
        <section className="img-generator">
        <h1 className="title">Gerador de Dogs *_*</h1>
        <DogRender
          loading={ loading }
          srcDog={ srcDog }
          dogName={ dogName }
          race={ race }
        />
        <HandleDogs
          onClickRefresh={ this.handleClick }
          onClickSave={ this.clickToSaveDog }
        />
      </section>

      <SaveDogBar myDogsList={ myDogs } onClick={ this.getDog } />

      </main>
    );
  }
}

export default RandomDog;
