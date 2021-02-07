import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EditHotelForm from './EditHotelForm';

function AddHotel() {
	const history = useHistory();

	async function onSubmit(data) {
		console.log('data', data);

		const url = BASE_URL + 'establishments';

		// when creating an establishment we need to use the POST method
		FETCH_OPTIONS.method = 'POST';

		// serialise the data
		FETCH_OPTIONS.body = JSON.stringify(data);

		// send every
		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
		history.push('/admin/hotels');
	}

	return (
		<Container>
			<Grid
				container
				direction='column'
				justify='space-between'
				alignItems='center'>
				<h1>Add Establishment</h1>
				<EditHotelForm onSubmit={onSubmit} />
			</Grid>
		</Container>
	);
}

export default AddHotel;
