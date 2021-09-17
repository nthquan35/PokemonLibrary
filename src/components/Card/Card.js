import React from 'react';
import './Card.css';

function Card(props){
	return (
		<div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5 secret'>
			<img alt="" src={props.img}/>
			<h2>{props.name}</h2>
		</div> 
	);
}


export default Card;