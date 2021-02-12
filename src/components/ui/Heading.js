import React from 'react';

function Heading({ title }) {
	return (
		<>
			<h1>{title} </h1>
			<hr className='content__hr' />
		</>
	);
}

export default Heading;
