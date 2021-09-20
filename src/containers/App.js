import React, {useState} from 'react';
import Card from '../components/Card/Card';
import CardList from '../components/Card/CardList';
import { pokemons } from '../components/Pokemon';
import SearchBox from '../components/SearchBox';
import LookupBox from '../components/LookupBox';
import './App.css';
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
	const [isAdded, setIsAdded] = useState(false);
	const [id, setId] = useState(21);


	function onSubmit(e){
		//this will only allow to search once
		// e.preventDefault();
		setSearchDebouce(searchField);
		setIsAdded(false);
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

	function handleSubmit(){
		var obj = {
			id: `${id}`,
			name: `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,
			img: `${data.sprites.other["official-artwork"].front_default}`
		}
		setIsAdded(true);
		setPokemons(pokemonsArray.concat(obj));
		setId(id+1);
		setSearchField('');
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
					onSubmit={onSubmit}
					onKeyDetect={onKeyDetect}
				/>
				{notFound || error ?
					<p>NOT FOUND or Error occured.</p>
					:
					<div>
						{data?
							<div>
								{isAdded?
									<h3 className={`f4 fw-3 light-silver`}>Added!</h3>
									:
									<Card 
										key={id} 
										name={data.name.charAt(0).toUpperCase() + data.name.slice(1)} 
										img ={data.sprites.other["official-artwork"].front_default}
										currentPage= {currentPage}
										handleSubmit={handleSubmit}
									/>
								}
							</div>
							:
							<p></p>
						}
					</div>

				}
				<button 
					className='absolute right-0 bottom-0 dib dim pointer f2 bg-moon-gray br3'
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