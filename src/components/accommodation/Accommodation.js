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
			<Container fluid className='body-light p-0 '>
				<div className='content'>
					<Container>
						<Heading title='Accommodations' />
					</Container>
					<HotelContainer />
				</div>
			</Container>
		</>
	);
}

export default Accommodation;
