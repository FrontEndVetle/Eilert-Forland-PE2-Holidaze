import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import { BASE_URL, headers } from '../../../constants/api';
import HotelCards from '../../accommodation/HotelCards';
import { Row, Container, Col } from 'react-bootstrap/';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import Heading from '../../ui/Heading';

function Hotels() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'establishments';
	const linkPath = '/admin/hotels/edit/';
	const btnText = 'Edit';
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: 'Please try and reload the ',
					});
				} else {
					setHotels(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	return (
		<>
			<MetaTags>
				<title>Admin accommodation list</title>
				<meta
					name='description'
					content='This page displays available accommodations'
				/>
			</MetaTags>
			<Container>
				<div className='content'>
					<Heading title='Current Listings' />

					<Row>
						{hotels &&
							hotels.map((hotel) => {
								const { id, name, image, price, maxGuests } = hotel;
								return (
									<Col className='d-flex' xs={12} md={6} key={id}>
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
				</div>
			</Container>
		</>
	);
}

export default Hotels;
