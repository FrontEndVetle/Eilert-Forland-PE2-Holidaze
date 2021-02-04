import React from 'react';
import HotelContainer from './HotelContainer';
import Container from '@material-ui/core/Container';

function Accommodation() {
	return (
		<Container className='content'>
			<h1>Accommodations</h1>
			<HotelContainer />
		</Container>
	);
}

export default Accommodation;
