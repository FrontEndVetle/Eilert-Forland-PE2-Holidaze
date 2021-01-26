import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';

function Messages() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const url = BASE_URL + 'contacts';

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
		<>
			<h1> Hotels </h1> {error && <div className='error'> {error} </div>}{' '}
			<ul>
				{' '}
				{hotels.map((hotel, i) => {
					return (
						<ul key={i}>
							<li>{hotel.name} </li>
							<li>{hotel.email} </li>
							<li>{hotel.message} </li>
						</ul>
					);
				})}{' '}
			</ul>{' '}
		</>
	);
}

export default Messages;
