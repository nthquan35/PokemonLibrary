import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CardList from '../components/Card/CardList';
import { pokemons } from '../components/Pokemon';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Clock from '../components/Clock';
import PokemonTitle from '../components/ApplicationName/PokemonTitle';
import {Navigation} from '../components/Navigation';
// import axios from 'axios';

export const MainPage = () => {
	const [pokemonsArray, setPokemons] = useState(pokemons);
	const [searchField, setSearchField] = useState('');
	const [currentPage, setCurrentPage] = useState(true);

	const history = useHistory();

	const filterPokemons = pokemonsArray.filter(pokemon => {
		return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
	})

	const handleDelete = async (name) =>{
		// console.log(name);
		setPokemons(pokemonsArray.filter(card => card.name !== name));
	}

	const onAddButtonClicked = async () => {
		setCurrentPage(false);
		history.push('/add');
	}

	return (
		<div>
			<div>
				<Navigation/>
				<Clock className='db'/>
			</div>
			<div className = 'tc'>
				<PokemonTitle/>
				<nav className='overflow-auto'>
					<SearchBox 
						searchChange = {(e) => setSearchField(e.target.value)}
					/>
					<button 
						className='fr dib dim pointer f2 bg-moon-gray br3'
						onClick={onAddButtonClicked}
					>
						ADD+
					</button>
				</nav>
				<Scroll>
					<CardList 
						pokemons={filterPokemons} 
						currentPage={currentPage}
						handleDelete={handleDelete}
					/>
				</Scroll>
			</div>
		</div>
	);
}