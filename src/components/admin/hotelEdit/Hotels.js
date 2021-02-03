import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import HotelCards from '../../accommodation/HotelCards';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

function Hotels() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
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
			<h1> Hotels </h1> {error && <div className='error'> {error} </div>}{' '}
			<Grid
				container
				direction='row'
				justify='space-evenly'
				alignItems='center'>
				{hotels.map((hotel) => {
					const { id, name, image, price, maxGuests } = hotel;
					return (
						<Grid xs={12} md={3} item key={id}>
							<HotelCards
								maxGuests={maxGuests}
								name={name}
								image={image}
								price={price}
								id={id}
								linkPath={linkPath}
								btnText={btnText}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default Hotels;
