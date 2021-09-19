import React from 'react';
import './Card.css';

function Card(props){
	if (props.currentPage){
		return (
			<div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5 pointer'>
				<img alt="" src={props.img}/>
				<h2>{props.name}</h2>
			</div> 
	)}
	return (
		<div className='flex flex-column items-center'>
			<div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5 pointer'>
				<img alt="" src={props.img}/>
				<h2>{props.name}</h2>
			</div>
			<button 
				className='dim w-20 f4 link pa3 dib br3 black fw-4 bg-light-yellow' 
				// onClick={onSubmit}
			>Add Pokemon
			</button>

		</div>
	)

}


export default Card;