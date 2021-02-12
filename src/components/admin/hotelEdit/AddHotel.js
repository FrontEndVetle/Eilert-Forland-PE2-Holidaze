import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap/';

import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import CardBtn from '../../ui/CardBtn';
import Heading from '../../ui/Heading';
import EditHotelForm from './EditHotelForm';

function AddHotel() {
	const [catering, setCatering] = useState('true');
	const history = useHistory();
	const btnName = 'Add Accommodation';

	const url = BASE_URL + 'establishments';

	async function onSubmit(data) {
		console.log('data', data);
		//check if user has clicked for selfCatering
		if (catering === true) {
			data.selfCatering = false;
		} else {
			data.selfCatering = true;
		}

		// Create establishment with POST method
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
						setCatering={setCatering}
						catering={catering}
						btnVar={<CardBtn linkPath='/admin' btnText='Cancel' />}
					/>
				</Row>
			</div>
		</Container>
	);
}

export default AddHotel;
