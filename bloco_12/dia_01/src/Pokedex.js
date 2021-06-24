import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import './App.css';

const TITLE = 'https://fontmeme.com/permalink/210623/d28472afb9a391904f9eab67724b5431.png'

function Pokedex() {
    return (
        <div className="main">
            <header className="title">
                <img src={TITLE} alt="Pokedex-Title"/>
            </header>
            <section className="pokedex">
                {pokemons.map(({ name, type, averageWeight, image, id }) => {
                return <Pokemon
                    name={name}
                    type={type}
                    weight={averageWeight.value}
                    unity={averageWeight.measurementUnit}
                    src={image} alt={`image-${name}`}
                    key={id}/>;
                })}
            </section>
        </div>
    )
}

export default Pokedex;