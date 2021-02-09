import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import HotelCards from '../../accommodation/HotelCards';
import { Row, Container, Col } from 'react-bootstrap/';

import CircularProgress from '@material-ui/core/CircularProgress';

function Hotels() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'establishments';
	const linkPath = '/admin/hotels/edit/';
	const btnText = 'Edit';

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
			<h1> Hotels </h1>
			<Row>
				{hotels.map((hotel) => {
					const { id, name, image, price, maxGuests } = hotel;
					return (
						<Col xs={12} md={3} key={id}>
							<HotelCards
								maxGuests={maxGuests}
								name={name}
								image={image}
								price={price}
								id={id}
								linkPath={linkPath}
								btnText={btnText}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default Hotels;
