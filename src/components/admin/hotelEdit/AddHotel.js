import React from 'react';
import { Row, Container } from 'react-bootstrap/';

import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import CardBtn from '../../ui/CardBtn';
import Heading from '../../ui/Heading';
import EditHotelForm from './EditHotelForm';

function AddHotel() {
	const history = useHistory();
	const btnName = 'Add Accommodation';

	const url = BASE_URL + 'establishments';

	async function onSubmit(data) {
		console.log('data', data);

		// Create establishment with POST method
		// serialise the data
		const methods = { headers, method: 'POST', body: JSON.stringify(data) };

		// send every
		await fetch(url, methods);

		history.push('/admin');
	}

	return (
		<Container>
			<div className='content'>
				<Heading title='Add accommodation' />
				<Row className=' d-flex justify-content-center '>
					<EditHotelForm
						onSubmit={onSubmit}
						btnName={btnName}
						btnVar={<CardBtn linkPath='/admin' btnText='Cancel' />}
					/>
				</Row>
			</div>
		</Container>
	);
}

export default AddHotel;
