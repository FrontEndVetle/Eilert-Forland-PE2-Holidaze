import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS, PATCH } from '../../../constants/api';
import DeleteHotel from './DeleteHotel';
import EditHotelForm from './EditHotelForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ConfirmDelete from '../../util/ConfirmDelete';
import Spinner from 'react-bootstrap/Spinner';

function EditHotel() {
	const history = useHistory();
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);

	const deletePath = 'establishments/';

	let { id } = useParams();

	const url = BASE_URL + 'establishments/' + id;

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.finally(() => setLoading(false))
			.then((json) => setHotel(json))
			.catch((error) => console.log(error));
	}, []);

	if (loading) {
		return <Spinner animation='border' className='spinner' />;
	}

	async function onSubmit(data) {
		console.log('data', data);

		FETCH_OPTIONS.method = 'PATCH';

		FETCH_OPTIONS.body = JSON.stringify(data);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
	}

	console.log(hotel.name);

	return (
		<Container>
			<Grid
				container
				direction='column'
				justify='space-between'
				alignItems='center'>
				<h1>Edit Establishment</h1>
				<EditHotelForm
					onSubmit={onSubmit}
					name={hotel.name}
					email={hotel.email}
					id={hotel.id}
					deletePath={deletePath}
					image={hotel.image}
					price={hotel.price}
					maxGuests={hotel.maxGuests}
					lat={hotel.lat}
					lng={hotel.lng}
					description={hotel.description}
					address={hotel.address}
					selfCatering={hotel.selfCatering}
				/>
			</Grid>
		</Container>
	);
}

export default EditHotel;
