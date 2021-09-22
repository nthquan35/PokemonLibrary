import React from 'react';

function Scroll(props) {
	return (
		<div style={{overflowY: 'scroll', border: '1px solid grey', height: '700px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;