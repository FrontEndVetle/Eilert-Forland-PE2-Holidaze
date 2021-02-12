import React from 'react';
import HotelContainer from './HotelContainer';
import Container from 'react-bootstrap/Container';
import Heading from '../ui/Heading';

function Accommodation() {
	return (
		<Container>
			<div className='content'>
				<Heading title='Accommodation' />

				<HotelContainer />
			</div>
		</Container>
	);
}

export default Accommodation;
