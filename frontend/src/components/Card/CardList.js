import React from 'react';
import Card from './Card';

function CardList({pokemons, currentPage, handleDelete}) {

	function selectedCard(name) {
		handleDelete(name);
	}

	return (
		<div>
			{pokemons.map((user, index) => 
				<Card 
					key={pokemons[index].id} 
					name={pokemons[index].name} 
					img ={pokemons[index].img}
					currentPage={currentPage}
					takeIndex={selectedCard}
				/>
			)}
		</div>
	);
};

export default CardList;