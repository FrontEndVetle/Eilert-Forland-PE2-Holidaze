import React from 'react';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../constants/api';

import HotelMap from '../accommodation/hotelMap/HotelMap';

import Swal from 'sweetalert2';
import { ListGroup } from 'react-bootstrap';
import { FaMobileAlt, FaEnvelope, FaHome } from 'react-icons/fa';

function Contact() {
	const history = useHistory();
	const heading = 'Contact us';

	const pinList = [
		{
			lat: 60.397076,
			lng: 5.324383,
			name: 'Holidaze office',
			maxGuests: '',
			price: '',
		},
	];

	async function onSubmit(data) {
		console.log('data', data);

		const url = BASE_URL + 'contacts';

		FETCH_OPTIONS.method = 'POST';
		FETCH_OPTIONS.body = JSON.stringify(data);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
		Swal.fire({
			title: 'Message sent!',
			text: 'We reply to messages within 24 hours',
			icon: 'success',
			confirmButtonText: 'OK',
		});
		history.push('/');
	}

	return (
		<div className='contact'>
			<Container>
				<Row className='d-flex justify-content-center'>
					<Col md={10} className='contact__content '>
						<Row className='d-flex justify-content-around'>
							<Col xs={10} md={5}>
								<ContactForm onSubmit={onSubmit} heading={heading} />
							</Col>
							<div className='border-right d-none d-md-block d-lg-block'></div>
							<Col xs={12} md={5} className='form'>
								<div className='map-specific'>
									<HotelMap pinList={pinList} mapZoom={10} />
								</div>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<FaHome className='icons' />
										<p>Bryggen 14</p>
										<small>address</small>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaEnvelope className='icons' />
										<p>holidaze@vacation.no</p>
										<small>Email</small>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaMobileAlt className='icons' />
										<p>+47 55849390030</p>
										<small>Phone number</small>
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Contact;
