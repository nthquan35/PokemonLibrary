import React from 'react';
import Card from './Card';

function CardList({pokemons, currentPage}) {
	return (
		<div>
			{pokemons.map((user, index) => 
				<Card 
					key={pokemons[index].id} 
					name={pokemons[index].name} 
					img ={pokemons[index].img}
					currentPage={currentPage}
				/>
			)}
		</div>
	);
};

export default CardList;