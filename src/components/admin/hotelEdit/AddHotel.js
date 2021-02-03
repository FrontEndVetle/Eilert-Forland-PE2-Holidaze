import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ConfirmDelete from '../../util/ConfirmDelete';
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
/*<Form onSubmit={handleSubmit(onSubmit)}>
			<h1> Add Hotel </h1>{' '}
			<Form.Group>
				<Form.Label> Name </Form.Label>{' '}
				<Form.Control
					name='name'
					placeholder='Enter a name for the hotel'
					ref={register}
				/>{' '}
			</Form.Group>
			<Form.Group>
				<Form.Label> Email </Form.Label>{' '}
				<Form.Control
					name='email'
					placeholder='Enter an email address'
					ref={register}
				/>{' '}
			</Form.Group>
			<Button type='submit'> Submit </Button>{' '}
		</Form>*/
