import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BASE_URL, FETCH_OPTIONS, PATCH } from '../../../constants/api';
import DeleteHotel from './DeleteHotel';
import EditHotelForm from './EditHotelForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function AddHotel() {
	const defaultState = {
		name: '',
		email: '',
	};

	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const [hotel, setHotel] = useState(defaultState);
	const deletePath = 'establishments/';

	let { id } = useParams();

	const fetchUrl = BASE_URL + 'establishments/' + id;

	useEffect(() => {
		fetch(fetchUrl, FETCH_OPTIONS)
			.then((response) => response.json())
			.then((json) => setHotel(json))
			.catch((error) => console.log(error));
	}, []);

	async function onSubmit(data) {
		console.log('data', data);

		FETCH_OPTIONS.method = 'PATCH';

		FETCH_OPTIONS.body = JSON.stringify(updatedEstablishment);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
	}

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

export default AddHotel;
/*<Form onSubmit={handleSubmit(onSubmit)}>
				<h1> Edit Hotel </h1>
				<Form.Group>
					<Form.Label> Name </Form.Label>
					<Form.Control
						name='name'
						defaultValue={hotel.name}
						placeholder='Enter a name for the hotel'
						ref={register}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label> Email </Form.Label>
					<Form.Control
						name='email'
						defaultValue={hotel.email}
						placeholder='Enter an email address'
						ref={register}
					/>{' '}
				</Form.Group>
				<Button type='submit'> Update </Button>
			</Form>{' '}
			<DeleteHotel id={id} />*/
