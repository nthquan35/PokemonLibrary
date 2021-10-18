import React from 'react';

function SearchBox({searchChange}){
	return (
		<div className='pa2'>
			<input
				className='pa3 ba w-50 br4 shadow-4 mt0' 
				type='search' 
				placeholder='Search...' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;