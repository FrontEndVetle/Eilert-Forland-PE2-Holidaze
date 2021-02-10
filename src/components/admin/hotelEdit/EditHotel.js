import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import EditHotelForm from './EditHotelForm';
import ConfirmDelete from '../../util/ConfirmDelete';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import { Col, Row, Container } from 'react-bootstrap/';

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
					setHotels([]);
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
				<Row className='content'>
					<h1>Edit Establishment</h1>
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
					/>
					<Row>
						<Col md={5}>
							<ConfirmDelete
								historyPath={historyPath}
								id={id}
								deletePath={deletePath}
							/>
						</Col>
					</Row>
				</Row>
			</Container>
		);
	}
}

export default EditHotel;
