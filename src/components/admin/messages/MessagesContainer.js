import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import MessageList from './MessageList';
import moment from 'moment';
import { Container, Col, Row } from 'react-bootstrap/';
import CircularProgress from '@material-ui/core/CircularProgress';

function Messages() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'contacts';
	const deletePath = 'contacts/';

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
					<h1> Contact messages </h1>
				</Col>
				{hotels.map((hotel, i) => {
					const { name, email, message, createdAt, id } = hotel;

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
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default Messages;
