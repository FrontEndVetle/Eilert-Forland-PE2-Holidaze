import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import { Row, Col, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Search from '../ui/Search';
import Sliders from '../ui/Silders';
import Spinner from 'react-bootstrap/Spinner';
import HotelMap from '../ui/hotelMap/HotelMap';
import ListGroup from 'react-bootstrap/ListGroup';

function GetHotels() {
	const [hotels, setHotels] = useState([]);
	const [filteredHotels, setFilteredHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filterPrice, setFilterPrice] = React.useState(270);
	const [filterGuests, setFilterGuests] = React.useState(1);
	const url = BASE_URL + 'establishments';
	const linkPath = 'hotel/';
	const btnText = 'View';

	//map coordinates and
	let pinList = [];

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
					setHotels(json);
					setFilteredHotels(json);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	//use searchValue to filter on hotels displaying correct cards
	let searchValue;
	function searchName(e) {
		searchValue = e.target.value.toLowerCase();
		filterHotels();
		return searchValue;
	}

	const filterHotels = function filter() {
		//create a new array from the hotels array
		const filteredArray = hotels.filter(function (acco) {
			//each hotel name to lowercase to compare with search value
			const hotelPrice = acco.price;
			const hotelCapacity = acco.maxGuests;
			const lowerCaseName = acco.name.toLowerCase();
			if (searchValue === undefined) {
				searchValue = '';
			}
			//check if the hotel name includes the search value
			if (
				hotelPrice < filterPrice &&
				hotelCapacity > filterGuests &&
				lowerCaseName.includes(searchValue)
			) {
				//add to filtered array

				return true;
			}

			return false;
		});
		//set filtered hotels to the new array
		setFilteredHotels(filteredArray);
	};

	return (
		<Container fluid className='body-light p-0  '>
			<Container>
				<div className='filter'>
					<Row className=' d-flex justify-content-between'>
						<Col xs={12} sm={12} lg={5}>
							<Search
								linkPath={linkPath}
								searchName={searchName}
								hotels={hotels}
							/>
						</Col>
						<div className='border-right d-none d-md-block d-lg-block'></div>

						<Col sm={12} sm={12} lg={6}>
							<Sliders
								filterGuests={filterGuests}
								filterPrice={filterPrice}
								setFilterGuests={setFilterGuests}
								setFilterPrice={setFilterPrice}
								handleSearch={filterHotels}
							/>
						</Col>
					</Row>
				</div>
			</Container>
			<Container fluid className='body-dark pt-2'>
				<Container>
					<Row className='d-flex justify-content-between'>
						<Col xs={12} lg={4} className='order-lg-2'>
							<div className='google-map'>
								<HotelMap pinList={pinList} mapZoom={10} />
							</div>
						</Col>
						<Col md={12} lg={8} className='order-lg-1'>
							<Row>
								{hotels &&
									filteredHotels.map((hotel) => {
										const { id, name, image, price, maxGuests } = hotel;
										pinList.push({
											lat: hotel.lat,
											lng: hotel.lng,
											name: hotel.name,
											maxGuests: (
												<ListGroup.Item>
													<p> Guest capacity: {hotel.maxGuests}</p>
												</ListGroup.Item>
											),
											price: (
												<ListGroup.Item>
													<p>Price: {hotel.price} euro</p>
												</ListGroup.Item>
											),
											address: hotel.address,
										});

										return (
											<Col xs={12} md={6} lg={12} className='d-flex' key={id}>
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
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	);
}

export default GetHotels;
