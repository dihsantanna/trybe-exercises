import React from 'react';
import Pokemon from './Pokemon';
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
            })[0]
    }

    render() {
        const { pokemons } = this.props
        return (
            <div className="main">
                <section className="pokedex">
                    {this.pokemonRender(pokemons)}
                </section>
            </div>
        )
    }
}

export default Pokedex;