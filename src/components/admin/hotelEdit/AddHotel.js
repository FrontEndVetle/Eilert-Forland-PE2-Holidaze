import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap/';
import MetaTags from 'react-meta-tags';

import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
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
		Swal.fire({
			title: 'Establishment added',
			text: 'Establishment was successfully added',
			icon: 'success',
			confirmButtonText: 'OK',
		});
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
			<Container fluid className='body-light pt-2 p-0 '>
				<div className='content'>
					<Container>
						<Heading title='Add accommodation' />
						<Row className='d-flex justify-content-center'>
							<Col xs={10} md={10}>
								<blockquote className='blockquote text-center'>
									<hr className='blockquote__hr' />
									“Customers loves certainty, make sure you give it to them.”
									<footer className='blockquote-footer'>
										<cite title='Source Title'> Amit Kalantri</cite>
									</footer>
									<hr className='blockquote__hr' />
								</blockquote>
							</Col>
						</Row>
					</Container>
					<Container fluid className='body-dark  pt-5 pb-4 '>
						<Container>
							<EditHotelForm
								onSubmit={onSubmit}
								btnName={btnName}
								setCatering={setCatering}
								catering={catering}
								btnVar={<CardBtn linkPath='/admin' btnText='Cancel' />}
							/>
						</Container>
					</Container>
				</div>
			</Container>
		</>
	);
}

export default AddHotel;
