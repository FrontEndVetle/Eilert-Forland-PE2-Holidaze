import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import { Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Search from '../util/filter/Search';
import Filters from '../util/filter/Silters';
import Spinner from 'react-bootstrap/Spinner';
import HotelMap from './hotelMap/HotelMap';

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
		<div className='content'>
			<h1>Accommodations</h1>
			<hr />
			<h4 className='text-center'>What are you looking for?</h4>

			<Row className='filter d-flex justify-content-between'>
				<Col md={6}>
					<Search searchName={searchName} hotels={hotels} />
				</Col>
				<Col md={4}>
					<Filters
						filterGuests={filterGuests}
						filterPrice={filterPrice}
						setFilterGuests={setFilterGuests}
						setFilterPrice={setFilterPrice}
						handleSearch={filterHotels}
					/>
				</Col>
			</Row>
			<hr />

			<Row className='d-flex justify-content-between'>
				<Col md={8}>
					<Row>
						{hotels &&
							filteredHotels.map((hotel) => {
								const { id, name, image, price, maxGuests } = hotel;
								pinList.push({
									lat: hotel.lat,
									lng: hotel.lng,
									name: hotel.name,
									maxGuests: 'Guest capacity ' + hotel.maxGuests,
									price: 'Price ' + hotel.price + ' euro',
								});

								return (
									<Col xs={12} md={6} lg={5} className='d-flex' key={id}>
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
				<Col xs={12} md={4}>
					<div className='google-map'>
						<HotelMap pinList={pinList} mapZoom={10} />
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default GetHotels;
