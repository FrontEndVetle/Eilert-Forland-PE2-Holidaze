import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import MessageList from './MessageList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Messages() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const url = BASE_URL + 'contacts';
	const deletePath = 'contacts/';

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
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

	return (
		<Container>
			<Row>
				<h1> Hotels </h1> {error && <div className='error'> {error} </div>}{' '}
				{hotels.map((hotel, i) => {
					const { name, email, message, createdAt, id } = hotel;
					return (
						<MessageList
							key={i}
							name={name}
							email={email}
							message={message}
							createdAt={createdAt}
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
