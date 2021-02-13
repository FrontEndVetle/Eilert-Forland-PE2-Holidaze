import React from 'react';
import MetaTags from 'react-meta-tags';

import HotelContainer from './HotelContainer';
import Container from 'react-bootstrap/Container';
import Heading from '../ui/Heading';

function Accommodation() {
	return (
		<>
			<MetaTags>
				<title>Accommodations page</title>
				<meta
					name='description'
					content='This page displays available accommodations'
				/>
			</MetaTags>
			<Container>
				<div className='content'>
					<Heading title='Accommodation' />

					<HotelContainer />
				</div>
			</Container>
		</>
	);
}

export default Accommodation;
