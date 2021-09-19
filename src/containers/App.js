import React, {useState} from 'react';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList';
import { pokemons } from '../components/Pokemon';
import SearchBox from '../components/SearchBox';
import LookupBox from '../components/LookupBox';
// import './App.css';
import Scroll from '../components/Scroll';
import Clock from '../components/Clock';
import PokemonTitle from '../components/ApplicationName/PokemonTitle';
import useFetch from '../components/useFetch';


document.title = "Pokemon Library";

function App() {
	const [pokemonsArray, setPokemons] = useState(pokemons);
	const [searchField, setSearchField] = useState('');
	const [currentPage, setCurrentPage] = useState(true);
	const [searchDebounce, setSearchDebouce] = useState('');

	function onSubmit(e){
		//this will only allow to search once
		// e.preventDefault();
		setSearchDebouce(searchField);
	}

	const {notFound, data, error} = useFetch(
		searchDebounce? 
			`https://pokeapi.co/api/v2/pokemon/${searchDebounce.toLowerCase()}`
		:
			''
	)


	function onKeyDetect(e){
		if (e.key === 'Enter'){
			onSubmit();
		}
	}

	const filterPokemons = pokemonsArray.filter(pokemon => {
		return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
	})

	if (currentPage)
		return(
			<div>
				<div>
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
							onClick={() => {
								setCurrentPage(false)
								setSearchField('')
							}}
						>
							ADD+
						</button>
					</nav>
					<Scroll>
						<CardList 
							pokemons={filterPokemons} 
							currentPage={currentPage} 
						/>
					</Scroll>
				</div>
			</div>
		)
	return (
		<div>
			<div>
				<Clock className='db'/>
			</div>
			<div className = 'tc'>
				<PokemonTitle/>
				<h2>Add New Pokemon to page</h2>
				{/*accept input here and retrieve data from api*/}
				<LookupBox
					searchChange={(e) => setSearchField(e.target.value)}
					onKeyDetect={(e) => onKeyDetect(e)}
					onSubmit={onSubmit}
				/>
				{notFound || error ?
					<p>NOT FOUND or Error occured.</p>
					:
					<div>
						{data?
							<Card 
							// fix the id value incrementation
								key={21} 
								name={data.name.charAt(0).toUpperCase() + data.name.slice(1)} 
								img ={data.sprites.other["official-artwork"].front_default}
								currentPage= {currentPage}
							/>
							:
							<p></p>
						}
					</div>

				}
				<button 
					className='absolute right-0 bottom- dib dim pointer f2 bg-moon-gray br3'
					onClick={() => {
						setCurrentPage(true)
						setSearchField('')
					}}
				>Back
				</button>
			</div>
		</div>

	)
};

export default App;