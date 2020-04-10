import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
	return (
		<div>
			{pokemons.map((user, index) => 
				<Card name={pokemons[index].name} 
					img ={pokemons[index].img}/>)
    		};
		</div>
	);
};

export default CardList;