import React from 'react';
import PropTypes from 'prop-types';

function Heading({ title }) {
	return (
		<div>
			<h1>{title} </h1>
			<hr className='content__hr' />
		</div>
	);
}

Heading.propTypes = {
	title: PropTypes.string,
};

export default Heading;
