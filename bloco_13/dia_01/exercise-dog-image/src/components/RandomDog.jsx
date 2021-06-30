import React from 'react';

const URL_API = 'https://dog.ceo/api/breeds/image/random';

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      srcDog: '',
    }

    this.fetchDog = this.fetchDog.bind(this);
  }
  
  async fetchDog() {
    const response = await fetch(URL_API);
    const src = await response.json();
    const message = src.message;
    this.setState({
      loading: false,
      srcDog: message
    })
  }

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { srcDog } = this.state;
    return (
      <section>
        <h1>Gerador de Fotos de Caninas</h1>
        <div>
          <img src={srcDog}/>
        </div>
      </section>
    );
  }
}

export default RandomDog;