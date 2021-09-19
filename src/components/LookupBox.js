import React from 'react';

function LookupBox({searchChange, onKeyDetect, onSubmit}){
	return (
		<div onKeyDown={onKeyDetect} className='pa2'>
			<input
				className='f4 pa3 ba w-50 shadow-4 mt0' 
				type='search' 
				placeholder='Search...' 
				onChange={searchChange}
			/>
			<button className='dim w-10 f4 link pa3 dib black fw- bg-light-blue' onClick={onSubmit}>Lookup</button>
		</div>
	);
}

export default LookupBox;