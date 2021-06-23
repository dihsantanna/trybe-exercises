import Pokemon from './Pokemon';
import pokemons from './data';
import './App.css';

function Pokedex() {
    return (
        <div>
            <header>
                <h1 className="title">Pokedex</h1>
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