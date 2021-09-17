import React, {useState} from 'react';
import CardList from '../components/Card/CardList';
import { pokemons } from '../components/Pokemon';
import SearchBox from '../components/SearchBox';
// import './App.css';
import Scroll from '../components/Scroll';
import Clock from '../components/Clock';
import PokemonTitle from '../components/ApplicationName/PokemonTitle';

document.title = "Pokemon Library";
// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			pokemons: pokemons,
// 			searchfield: ''
// 		};
// 	}
function App() {
	const [pokemonsArray, setPokemons] = useState(pokemons);
	const [searchField, setSearchField] = useState('');
	const [currentPage, setCurrentPage] = useState(true);
	const onSearchChange = (event) =>{
		setSearchField(event.target.value);
	}


	// render() {
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
						<SearchBox searchChange = {onSearchChange}/>
						<button 
							className='fr dib dim pointer f2 bg-moon-gray br3'
							onClick={() => setCurrentPage(false)}
						>
							ADD+
						</button>
					</nav>
					<Scroll>
						<CardList pokemons={filterPokemons} />
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
				<SearchBox/>
				<button 
					className='fr dib dim pointer f2 bg-moon-gray br3'
					onClick={() => setCurrentPage(true)}
				>Back
				</button>
			</div>
		</div>

	)
};

export default App;