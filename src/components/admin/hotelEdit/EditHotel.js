import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import EditHotelForm from './EditHotelForm';
import ConfirmDelete from '../ConfirmDelete';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import { Row, Container } from 'react-bootstrap/';
import Heading from '../../ui/Heading';

function EditHotel() {
	const history = useHistory();
	const [hotel, setHotel] = useState({});
	const [loading, setLoading] = useState(true);
	const [catering, setCatering] = useState('true');

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
		//check if user has clicked for selfCatering
		if (catering === true) {
			data.selfCatering = false;
		} else {
			data.selfCatering = true;
		}

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
	} = hotel;

	if (hotel) {
		return (
			<>
				<MetaTags>
					<title>Edit Accommodation</title>
					<meta
						name='description'
						content='This page lets you edit accommodations'
					/>
				</MetaTags>
				<Container fluid className='body-light pt-2 p-0 '>
					<div className='content'>
						<Container>
							<Heading title='Edit Accommodation' />

							<blockquote className='blockquote text-center'>
								<hr className='blockquote__hr' />
								"A wise man changes his mind, a fool never will."
								<footer className='blockquote-footer'>
									<cite title='Source Title'> Spanish Proverb</cite>
								</footer>
								<hr className='blockquote__hr' />
							</blockquote>
						</Container>

						<Container fluid className='body-dark pt-5 pb-4 '>
							<Container>
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
									setCatering={setCatering}
									catering={catering}
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
							</Container>
						</Container>
					</div>
				</Container>
			</>
		);
	}
}

export default EditHotel;
