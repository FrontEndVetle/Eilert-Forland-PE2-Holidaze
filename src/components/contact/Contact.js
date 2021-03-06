import React from 'react';
import MetaTags from 'react-meta-tags';

import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../constants/api';
import HotelMap from '../ui/hotelMap/HotelMap';
import Swal from 'sweetalert2';
import { ListGroup } from 'react-bootstrap';
import { FaMobileAlt, FaEnvelope, FaHome } from 'react-icons/fa';
import ListInfoIcon from '../ui/InfoIcon';
import Heading from '../ui/Heading';

function Contact() {
	const history = useHistory();
	const heading = 'Contact us';

	const pinList = [
		{
			lat: 60.397076,
			lng: 5.324383,
			name: 'Holidaze office',
			address: 'Bryggen 14',
		},
	];

	async function onSubmit(data) {
		console.log('data', data);

		const url = BASE_URL + 'contacts';

		const methods = { headers, method: 'POST', body: JSON.stringify(data) };

		fetch(url, methods)
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
		<>
			<MetaTags>
				<title>Contact page</title>
				<meta
					name='description'
					content='This page lets you send a message to Holidaze. Contact information'
				/>
			</MetaTags>
			<div className='contact'>
				<Container>
					<Row className='d-flex justify-content-center'>
						<Col md={10} className='contact__content '>
							<Heading title='Contact' />
							<Row className='d-flex justify-content-around mt-5'>
								<Col xs={10} md={5}>
									<ContactForm onSubmit={onSubmit} />
								</Col>
								<div className='border-right d-none d-md-block d-lg-block'></div>
								<Col xs={12} md={6} className='form'>
									<div className='map-specific'>
										<HotelMap pinList={pinList} mapZoom={10} />
									</div>
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<ListInfoIcon
												small='Address'
												info='Bryggen 14'
												icon={<FaHome />}
											/>
										</ListGroup.Item>
										<ListGroup.Item>
											<ListInfoIcon
												small='Email'
												info='holidaze@vacation.no'
												icon={<FaEnvelope />}
											/>
										</ListGroup.Item>
										<ListGroup.Item>
											<ListInfoIcon
												small='Phone number'
												info='+47 55849390030'
												icon={<FaMobileAlt />}
											/>
										</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default Contact;
