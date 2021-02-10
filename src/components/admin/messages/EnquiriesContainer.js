import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../../constants/api';
import MessageList from './MessageList';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';

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
					<h1> Enquiries </h1>
				</Col>
				{messages &&
					messages.map((contact, i) => {
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
								checkIn={checkInDate}
								checkOut={checkOutDate}
								id={id}
								deletePath={deletePath}
								hotelName={establishmentId}
								historyPath={historyPath}
							/>
						);
					})}
			</Row>
		</Container>
	);
}

export default EnquiriesContainer;
