import React from 'react';
import Card from './Card';

function CardList({pokemons}) {
	return (
		<div>
			{pokemons.map((user, index) => 
				<Card key={pokemons[index].id} name={pokemons[index].name} 
					img ={pokemons[index].img}/>
			)}
		</div>
	);
};

export default CardList;