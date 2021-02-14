import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import { BASE_URL, headers } from '../../../constants/api';
import HotelCards from '../../accommodation/HotelCards';
import { Row, Container, Col } from 'react-bootstrap/';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import Heading from '../../ui/Heading';
import Search from '../../ui/Search';

function Hotels() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredHotels, setFilteredHotels] = useState([]);

	const url = BASE_URL + 'establishments';
	const linkPath = '/admin/hotels/edit/';
	const btnText = 'Edit';
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
				} else {
					setHotels(json);
					setFilteredHotels(json);
				}
			})
			.catch((error) => {
				console.log(error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!',
					footer: 'Please try and reload the page',
				});
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	const filterHotels = function filter(e) {
		//create a new array from the hotels array
		const filteredArray = hotels.filter(function (acco) {
			//each hotel name to lowercase to compare with search value

			const lowerCaseName = acco.name.toLowerCase();
			const searchValue = e.target.value.toLowerCase();

			//check if the hotel name includes the search value
			if (lowerCaseName.includes(searchValue)) {
				//add to filtered array

				return true;
			}

			return false;
		});
		//set filtered hotels to the new array
		setFilteredHotels(filteredArray);
	};

	return (
		<>
			<MetaTags>
				<title>Admin accommodation list</title>
				<meta
					name='description'
					content='This page displays available accommodations'
				/>
			</MetaTags>
			<Container>
				<div className='content'>
					<Heading title='Current Listings' />

					<Row className='d-flex justify-content-center'>
						<Col xs={12}>
							<Search
								linkPath={linkPath}
								searchName={filterHotels}
								hotels={hotels}
							/>
						</Col>
						{hotels &&
							filteredHotels.map((hotel) => {
								const { id, name, image, price, maxGuests } = hotel;
								return (
									<Col className='d-flex' xs={12} md={6} lg={9} key={id}>
										<HotelCards
											maxGuests={maxGuests}
											name={name}
											image={image}
											price={price}
											id={id}
											linkPath={linkPath}
											btnText={btnText}
										/>
									</Col>
								);
							})}
					</Row>
				</div>
			</Container>
		</>
	);
}

export default Hotels;
