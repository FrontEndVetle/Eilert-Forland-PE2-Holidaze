import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import EditHotelForm from './EditHotelForm';
import ConfirmDelete from '../ConfirmDelete';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import { Col, Row, Container } from 'react-bootstrap/';
import Heading from '../../ui/Heading';

function EditHotel() {
	const history = useHistory();
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);

	const deletePath = 'establishments/';
	const historyPath = '/admin/hotels';
	const btnName = 'Edit';
	let { id } = useParams();

	const url = BASE_URL + 'establishments/' + id;

	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotel([]);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: 'Please try and reload the ',
					});
				} else {
					setHotel(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	async function onSubmit(data) {
		console.log('data', data);

		const methods = { headers, method: 'PATCH', body: JSON.stringify(data) };

		await fetch(url, methods);
		history.push('/admin/hotels');
	}

	const {
		name,
		description,
		address,
		image,
		email,
		price,
		maxGuests,
		lng,
		lat,
		selfCatering,
	} = hotel;

	if (hotel) {
		return (
			<Container>
				<div className='content'>
					<Heading title='Edit Accommodation' />

					<Row>
						<EditHotelForm
							onSubmit={onSubmit}
							name={name}
							email={email}
							id={id}
							image={image}
							price={price}
							maxGuests={maxGuests}
							lat={lat}
							lng={lng}
							description={description}
							address={address}
							selfCatering={selfCatering}
							btnName={btnName}
							btnVar={
								<ConfirmDelete
									historyPath={historyPath}
									id={id}
									deletePath={deletePath}
									className='form__btn btn btn__primary'
								/>
							}
						/>
					</Row>
				</div>
			</Container>
		);
	}
}

export default EditHotel;
