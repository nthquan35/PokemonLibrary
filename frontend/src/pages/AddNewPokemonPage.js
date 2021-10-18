import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonTitle from '../components/ApplicationName/PokemonTitle';
import LookupBox from '../components/LookupBox';
import Card from '../components/Card/Card';
import Clock from '../components/Clock';
import { pokemons } from '../components/Pokemon';
import useFetch from '../components/useFetch';

export const AddNewPokemonPage = () => {
	const [pokemonsArray, setPokemons] = useState(pokemons);
	const [searchField, setSearchField] = useState('');
	const [currentPage, setCurrentPage] = useState(false);
	const [searchDebounce, setSearchDebouce] = useState('');
	const [isAdded, setIsAdded] = useState(false);
	const [id, setId] = useState(21);
	const [isExisted, setIsExisted] = useState(false);

	const history = useHistory();

	var {notFound, data, error} = useFetch(
		searchDebounce? 
			`https://pokeapi.co/api/v2/pokemon/${searchDebounce.toLowerCase()}`
		:
			''
	)

	function onSubmit(e){
		//this will only allow to search once
		// e.preventDefault();
		if (pokemonsArray.filter(pokemon => pokemon.name.toLowerCase() === searchDebounce.toLowerCase()).length !== 0){
			setIsExisted(true);
			setSearchDebouce('');
		} else{
			setSearchDebouce(searchField);
			setIsAdded(false);
		}
	}

	function onKeyDetect(e){
		if (e.key === 'Enter'){
			onSubmit();
		}
	}

	function handleSubmit(){
		if (!isExisted){
			var obj = {
				id: `${id}`,
				name: `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,
				img: `${data.sprites.other["official-artwork"].front_default}`
			}
			setIsAdded(true);
			setPokemons(pokemonsArray.concat(obj));
			setId(id+1);
		}
	}

	const onBackButtonClicked = () => {
		setCurrentPage(true);
		history.push("/");
	}

	return (
		<div onKeyDown={onKeyDetect}>
			<div>
				<Clock className='db'/>
			</div>
			<div className = 'tc'>
				<PokemonTitle/>
				<h2>Add New Pokemon to page</h2>
				{/*accept input here and retrieve data from api*/}
				<LookupBox
					searchChange={(e) => {
						setSearchField(e.target.value)
						setIsExisted(false)						
					}}
					onSubmit={onSubmit}
				/>
				{notFound && error ?
					<p className="dark-red">Cannot find pokemon name <b>{searchField}</b></p>
					:
					<div>
						{data && searchDebounce?
							<div>
								{isAdded?
									<h3 id="button-fadeOut" className={`f4 fw-3 washed-red`}>Added!</h3>
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
							<div>
								{isExisted?
									<p className="dark-red"><b>{searchField}</b> is already existed in the database</p>
									:
									<p></p>
								}
							</div>
						}
					</div>
				}
				<button 
					className='absolute right-0 bottom-0 dib dim pointer f2 bg-moon-gray br3'
					onClick={onBackButtonClicked}
				>Back
				</button>
			</div>
		</div>

	)
}