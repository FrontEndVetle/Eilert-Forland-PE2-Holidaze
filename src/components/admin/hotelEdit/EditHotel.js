import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS, PATCH } from '../../../constants/api';
import EditHotelForm from './EditHotelForm';
import ConfirmDelete from '../../util/ConfirmDelete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Col, Row, Container } from 'react-bootstrap/';

function EditHotel() {
	const history = useHistory();
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);

	const deletePath = 'establishments/';
	const btnName = 'Edit';
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
		return <CircularProgress className='spinner' />;
	}

	async function onSubmit(data) {
		console.log('data', data);

		FETCH_OPTIONS.method = 'PATCH';

		FETCH_OPTIONS.body = JSON.stringify(data);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
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
							<ConfirmDelete id={id} deletePath={deletePath} />
						</Col>
					</Row>
				</Row>
			</Container>
		);
	}
}

export default EditHotel;
