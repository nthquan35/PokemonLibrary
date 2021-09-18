import React from 'react';

function LookupBox({searchChange, onKeyDetect, onSubmit}){
	return (
		<div onKeyDown={onKeyDetect} className='pa2'>
			<input
				className='pa3 ba w-30 br4 shadow-4 mt0' 
				type='search' 
				placeholder='Search' 
				onChange={searchChange}
			/>
			<button className='grow w-30 f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Lookup</button>
		</div>
	);
}

export default LookupBox;