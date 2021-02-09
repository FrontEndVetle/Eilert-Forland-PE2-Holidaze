import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import MessageList from './MessageList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';

function EnquiriesContainer() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'enquiries';
	const deletePath = 'enquiries/';

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.finally(() => setLoading(false))
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					setError(json.message);
				} else {
					setHotels(json);
				}
			})
			.catch((error) => console.log(error));
	}, []);

	if (loading) {
		return <CircularProgress className='spinner' />;
	}

	return (
		<Container>
			<Row className='content d-flex justify-content-center'>
				<Col xs={12}>
					<h1> Enquiries </h1>
				</Col>
				{hotels.map((hotel, i) => {
					const {
						name,
						email,
						message,
						createdAt,
						checkIn,
						checkOut,
						id,
						establishmentId,
					} = hotel;

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
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default EnquiriesContainer;
