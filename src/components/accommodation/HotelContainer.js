import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import HotelMap from './hotelMap/HotelMap';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function GetHotels() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);

	const url = BASE_URL + 'establishments';

	const options = { headers };

	useEffect(() => {
		fetch(url, options)
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
			<Row className='justify-content-between'>
				{error && <div className='error'> {error} </div>}
				{hotels.map((hotel) => {
					const { id, name, image, price } = hotel;
					return (
						<Col sm={6} md={4} md={3} key={id}>
							<HotelCards
								key={id}
								name={name}
								image={image}
								price={price}
								id={id}
							/>
						</Col>
					);
				})}{' '}
			</Row>
			<HotelMap />
		</Container>
	);
}

export default GetHotels;
