import React from 'react';
import { Row, Container } from 'react-bootstrap/';

import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import EditHotelForm from './EditHotelForm';

function AddHotel() {
	const history = useHistory();
	const btnName = 'Add Accommodation';

	const url = BASE_URL + 'establishments';

	async function onSubmit(data) {
		console.log('data', data);

		// when creating an establishment we need to use the POST method
		FETCH_OPTIONS.method = 'POST';

		// serialise the data
		FETCH_OPTIONS.body = JSON.stringify(data);

		// send every
		await fetch(url, FETCH_OPTIONS);

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
