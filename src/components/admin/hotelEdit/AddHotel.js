import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';

function AddHotel() {
	const { register, handleSubmit } = useForm();

	const history = useHistory();

	async function onSubmit(data) {
		console.log('data', data);

		const url = BASE_URL + 'establishments';

		// when creating an establishment we need to use the POST method
		FETCH_OPTIONS.method = 'POST';

		// serialise the data
		FETCH_OPTIONS.body = JSON.stringify(newEstablishment);

		// send every
		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
		history.push('/admin/hotels');
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
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
		</Form>
	);
}

export default AddHotel;
