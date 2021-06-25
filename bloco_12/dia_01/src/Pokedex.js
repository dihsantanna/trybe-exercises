import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './App.css';

class Pokedex extends React.Component {
    constructor() {
        super()
        this.state = { 
            pokeIndex: 0,
         };
        this.indexPokemon = this.indexPokemon.bind(this);
    };

    indexPokemon(pokemons) {
        const index = this.state.pokeIndex;

        if (index === (pokemons.length - 1)) return this.setState({ pokeIndex: 0 });

        this.setState((before, _props) => ({ pokeIndex: before.pokeIndex + 1 }))
    };

    pokemonRender(pokemons) {
        const index = this.state.pokeIndex;

        const { name, type, averageWeight, image, id } = pokemons[index];

        return <Pokemon
                name={name}
                type={type}
                weight={averageWeight.value}
                unity={averageWeight.measurementUnit}
                src={image} alt={`image-${name}`}
                key={id}/>;
    
    };

    render() {
        const { pokemons } = this.props
        return (
            <div className="main">
                <section className="pokedex">
                    {this.pokemonRender(pokemons)}
                    <Button btnType='button' btnClass='btn-next' btnFunc={() => this.indexPokemon(pokemons)} btnText='Next Pokemon'/>
                </section>
            </div>
        )
    }
}

export default Pokedex;