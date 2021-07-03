import React from 'react';
import Pokemon from './Pokemon';
import PokeTypesButtons from './PokeTypesButtons';
import NextButton from './NextButton';
import './css/pokedex.css';

class Pokedex extends React.Component {
	constructor() {
		super();

		this.state = {
			loading: true,
			pokeIndex: 0,
			pokeRender: {},
			pokeType: 'Psychic',
			nextBtn: true,
		};

		this.typeChange = this.typeChange.bind(this);

		this.pokeFilter = this.pokeFilter.bind(this);

		this.indexPokemon = this.indexPokemon.bind(this);

		this.disabledNextBtn = this.disabledNextBtn.bind(this);

		this.pokemonRender = this.pokemonRender.bind(this);
	};

	disabledNextBtn(length) {
		if (length <= 1) {
			return this.setState((state) => ({
				...state,
				nextBtn: true,
			}));
		}
		this.setState((state) => ({
			...state,
			nextBtn: false,
		}));
	}    
	
	typeChange({ target }) {
		const event = target.value !== this.state.pokeType;
		if (event) {
			this.setState({
				pokeIndex: 0,
				pokeType: target.value
			}, () => this.pokemonRender());
		}
	}
	
	pokeFilter(pokemons) {
		const { pokeType } = this.state;
		const filterList =  pokemons
			.filter((pokemon) => pokemon.type.includes(pokeType));
		return filterList;
	}
	
	indexPokemon() {
		const { pokemons } = this.props;
		const { pokeIndex  }= this.state;
		
		const indexFilter = this.pokeFilter(pokemons).length - 1;

		if (pokeIndex === indexFilter) return this.setState({ pokeIndex: 0 });

		this.setState((before) => ({ pokeIndex: before.pokeIndex + 1 }));
	};
	
	async pokemonRender() {
		const { pokemons } = this.props;
		const filterPokemon = await this.pokeFilter(pokemons)
		this.setState((state) => ({
			...state,
			pokeRender: [...filterPokemon],
			loading: false,
		}));
		this.disabledNextBtn(filterPokemon.length);
	};

	componentDidMount() {
		this.pokemonRender();
	}

	render() {
		const { pokemons } = this.props;
		const { nextBtn , pokeRender, loading, pokeIndex } = this.state;
		return (
			<section
				className="pokedex"
			>
				
			{
				loading
				? <span>Loading . . .</span>
				: <Pokemon
					name={pokeRender[pokeIndex].name}
					type={pokeRender[pokeIndex].type}
					weight={pokeRender[pokeIndex].averageWeight.value}
					unity={pokeRender[pokeIndex].averageWeight.measurementUnit}
					src={pokeRender[pokeIndex].image} alt={`image-${pokeRender.name}`}
					key={pokeRender[pokeIndex].id}
				/>
			}

			<PokeTypesButtons
				btnFunc={this.typeChange}
				pokemons={pokemons}
			/>

			<NextButton
				btnType='button'
				btnFunc={this.indexPokemon}
				disabled={ nextBtn }
				/>

			</section>
		)
	}
}

export default Pokedex;