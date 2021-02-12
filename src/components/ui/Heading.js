import React from 'react';

function Heading({ title }) {
	return (
		<div>
			<h1>{title} </h1>
			<hr className='content__hr' />
		</div>
	);
}

export default Heading;
