import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../../constants/api';
import MessageList from './MessageList';
import { Row, Col, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import Heading from '../../ui/Heading';
import { FaCalendar, FaHome } from 'react-icons/fa';
import InfoIcon from '../../ui/InfoIcon';

function EnquiriesContainer() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'enquiries';
	const deletePath = 'enquiries/';
	const historyPath = '/admin';
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setMessages([]);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: 'Please try and reload the ',
					});
				} else {
					setMessages(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	return (
		<Container>
			<Row className='content d-flex justify-content-center'>
				<Col xs={12}>
					<Heading title='Enquiries' />
				</Col>
				{messages &&
					messages
						.slice(0)
						.reverse()
						.map((contact, i) => {
							const {
								name,
								email,
								message,
								createdAt,
								checkIn,
								checkOut,
								id,
								establishmentId,
							} = contact;

							let checkInDate = moment(checkIn).format('YYYY-MM-DD');
							let checkOutDate = moment(checkOut).format('YYYY-MM-DD');
							let sentDate = moment(createdAt).format('YYYY-MM-DD');

							return (
								<MessageList
									key={i}
									name={name}
									email={email}
									message={message}
									createdAt={sentDate}
									id={id}
									deletePath={deletePath}
									historyPath={historyPath}
									messageContent={
										<ListGroup variant='flush'>
											<ListGroup.Item>
												<InfoIcon
													small='Establishment'
													info={establishmentId}
													icon={<FaHome />}
												/>
											</ListGroup.Item>
											<ListGroup.Item>
												<InfoIcon
													small='Checkin'
													info={checkInDate}
													icon={<FaCalendar />}
												/>
											</ListGroup.Item>
											<ListGroup.Item>
												<InfoIcon
													small='Checkout'
													info={checkOutDate}
													icon={<FaCalendar />}
												/>
											</ListGroup.Item>
										</ListGroup>
									}
								/>
							);
						})}
			</Row>
		</Container>
	);
}

export default EnquiriesContainer;
