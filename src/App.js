import React, {Component} from 'react';
import CardList from './CardList';
import { pokemons } from './Pokemon';
import SearchBox from './SearchBox';
import './App.css';

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
		const filterPokemons = this.state.pokemons.filter(pokemons => {
			return pokemons.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className = 'tc'>
				<h1 className='f-headline'> Pokemon Index </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<CardList pokemons={filterPokemons} />
			</div>
		);
	}
};

export default App;