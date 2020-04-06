import React, {Component} from 'react';
import CardList from '../components/CardList';
import { pokemons } from '../components/Pokemon';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

document.title = "Pokemon Library";
class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemons: pokemons,
			searchfield: ''
		};
	}

	// componentDidMount() {
	// 	fetch('add a link here')
	// 		.then(response => response.json())
	// 		.then(users => { this.setState({pokemons: users}) });
	// }

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filterPokemons = this.state.pokemons.filter(pokemon => {
			return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className = 'tc'>
				<h1 className='f-headline'> Pokemon Index </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList pokemons={filterPokemons} />
				</Scroll>
			</div>
		);
	}
};

export default App;