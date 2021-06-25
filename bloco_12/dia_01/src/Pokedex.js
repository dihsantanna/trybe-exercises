import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './App.css';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = { 
            pokeIndex: 0,
            pokeType: 'Psychic'
         };

        this.typeChange = this.typeChange.bind(this);

        this.pokeFilter = this.pokeFilter.bind(this);

        this.indexPokemon = this.indexPokemon.bind(this);
    };

    typeChange(e) {
        const event = e.target.innerText.contains !== this.state.pokeType;
        if (event) {
            return this.setState({ pokeType: e.target.innerText });
        }
    }
    
    pokeFilter(pokemons) {
        return pokemons.filter((pokemon) => pokemon.type === this.state.pokeType);
    }
    
    indexPokemon(pokemons) {
        const index = this.state.pokeIndex;
        const indexFilter = this.pokeFilter(pokemons).length - 1;

        if (index === indexFilter) return this.setState({ pokeIndex: 0 });

        this.setState((before, _props) => ({ pokeIndex: before.pokeIndex + 1 }))
    };
    
    pokemonRender(pokemons) {
        const index = this.state.pokeIndex;
        
        const filterPokemon = this.pokeFilter(pokemons)
        
        const { name, type, averageWeight, image, id } = filterPokemon[index];
        
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
            <section className="pokedex">
                {this.pokemonRender(pokemons)}
                <div className="poke-type">
                <Button btnType='button' btnClass='btn-psychic' btnFunc={(event) => this.typeChange(event)} btnText='Psychic'/>
                <Button btnType='button' btnClass='btn-fire' btnFunc={(event) => this.typeChange(event)} btnText='Fire'/>
                </div>
                <Button btnType='button' btnClass='btn-next' btnFunc={() => this.indexPokemon(pokemons)} btnText='Next Pokemon'/>
            </section>
        )
    }
}

export default Pokedex;