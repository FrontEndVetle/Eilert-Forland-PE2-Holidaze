import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap/';
import MetaTags from 'react-meta-tags';

import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import CardBtn from '../../ui/CardBtn';
import Heading from '../../ui/Heading';
import EditHotelForm from './EditHotelForm';
import ListGroup from 'react-bootstrap/ListGroup';
import InfoIcon from '../../ui/InfoIcon';
import { FaEuroSign, FaBed } from 'react-icons/fa';

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
		<>
			<MetaTags>
				<title>Add accommodation</title>
				<meta
					name='description'
					content='This page lets you add accommodations'
				/>
			</MetaTags>

			<Container>
				<div className='content'>
					<Heading title='Add accommodation' />
					<Row className='d-flex justify-content-center'>
						<Col xs={10} md={10}>
							<hr />
							<blockquote className='blockquote text-center'>
								“Customers loves certainty, make sure you give it to them.”
								<footer className='blockquote-footer'>
									<cite title='Source Title'> Amit Kalantri</cite>
								</footer>
							</blockquote>

							<hr />
						</Col>
					</Row>
					<EditHotelForm
						onSubmit={onSubmit}
						btnName={btnName}
						setCatering={setCatering}
						catering={catering}
						btnVar={<CardBtn linkPath='/admin' btnText='Cancel' />}
					/>
				</div>
			</Container>
		</>
	);
}

export default AddHotel;
