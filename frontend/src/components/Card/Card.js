import React from 'react';
import './Card.css';

function Card(props){

	function onTrigger(event){
		event.preventDefault();
		props.takeIndex(props.name);
	}

	if (props.currentPage){
		return (
			<div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5 pointer'>
				<button 
					className="absolute right-0 top-0 button-custom fw5 f4"
					onClick={onTrigger}
				>X</button>
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
				onClick={props.handleSubmit}
			>Add Pokemon
			</button>

		</div>
	)

}


export default Card;