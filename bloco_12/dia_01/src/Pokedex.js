import React from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import './App.css';

class Pokedex extends React.Component {

    pokemonRender(pokemons) {
        return pokemons.map(({ name, type, averageWeight, image, id }) => {
            return <Pokemon
                name={name}
                type={type}
                weight={averageWeight.value}
                unity={averageWeight.measurementUnit}
                src={image} alt={`image-${name}`}
                key={id}/>;
            })
    }

    render() {
        const { pokemons } = this.props
        return (
            <div className="main">
                <Header />
                <section className="pokedex">
                    {this.pokemonRender(pokemons)}
                </section>
            </div>
        )
    }
}

export default Pokedex;