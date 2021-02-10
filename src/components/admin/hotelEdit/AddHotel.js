import React from 'react';
import { Row, Container } from 'react-bootstrap/';

import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
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
			<Row className='content d-flex justify-content-center '>
				<h1>Add Establishment</h1>
				<EditHotelForm onSubmit={onSubmit} btnName={btnName} />
			</Row>
		</Container>
	);
}

export default AddHotel;
