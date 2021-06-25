import React from 'react';
import Pokemon from './Pokemon';
import PokeTypesButtons from './PokeTypesButtons';
import NextButton from './NextButton';
import './css/pokedex.css';

class Pokedex extends React.Component {
    constructor() {
        super()

        this.state = { 
            pokeIndex: 0,
            pokeType: 'Psychic',
         };

        this.typeChange = this.typeChange.bind(this);

        this.pokeFilter = this.pokeFilter.bind(this);

        this.indexPokemon = this.indexPokemon.bind(this);
    };

    disabledNextBtn(filterList) {
        if (filterList.length === 1) {
            return document.querySelector('.btn-next').setAttribute('disabled', 'disabled');
        }
        if (document.querySelector('.btn-next').getAttribute('disabled')) {
            document.querySelector('.btn-next').removeAttribute('disabled', 'disabled');
        }
    }
    
    
    typeChange(e) {
        const event = e.target.value !== this.state.pokeType;
        if (event) {
            this.setState({ pokeIndex: 0 });
            this.setState({ pokeType: e.target.value });
        }
    }
    
    pokeFilter(pokemons) {
        const filterList =  pokemons.filter((pokemon) => pokemon.type.includes(this.state.pokeType));
        return filterList;
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
        this.disabledNextBtn(filterPokemon);
        const { name, type, averageWeight, image, id } = filterPokemon[index];
        
        return <Pokemon
        name={name}
        type={type}
        weight={averageWeight.value}
        unity={averageWeight.measurementUnit}
        src={image} alt={`image-${name}`}
        key={id}
        />;
        
    };

    render() {
        const { pokemons } = this.props
        return (
            <section className="pokedex" >
                
                {this.pokemonRender(pokemons)}

                <PokeTypesButtons btnFunc={(event) => {
                    this.typeChange(event);
                }} 
                    pokemons={pokemons} />

                <NextButton btnType='button' btnFunc={() => this.indexPokemon(pokemons)} />

            </section>
        )
    }
}

export default Pokedex;