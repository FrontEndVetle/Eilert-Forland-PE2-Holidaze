import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import { Row, Col } from 'react-bootstrap';

import Search from '../util/filter/Search';
import Filters from '../util/filter/Filters';
import Spinner from 'react-bootstrap/Spinner';
import HotelMap from './hotelMap/HotelMap';

function GetHotels() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [filteredHotels, setFilteredHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'establishments';
	const linkPath = 'hotel/';
	const btnText = 'View';

	//map coordinates and
	let pinList = [];

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.finally(() => setLoading(false))
			.then((json) => {
				// handle error
				if (json.error) {
					setHotels([]);
				} else {
					setHotels(json);
					setFilteredHotels(json);
				}
			})
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					setError(json.message);
				} else {
					setHotels(json);
					setFilteredHotels(json);
				}
			})
			.finally(() => setLoading(false))

			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				// handle error
				if (json.error) {
					setHotels([]);
					alert('alert');
				} else {
					setHotels(json);
					setFilteredHotels(json);
				}
			})
			.finally(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
	}

	//varibles to store user filter input
	let price;
	let numberGuests;
	let searchValue;

	//get users filter for number of visitors
	function maxGuests(visitors) {
		return (numberGuests = visitors);
	}

	//get maxPrice value user has set
	function maxPrice(max) {
		price = max;
		return price;
	}

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
				hotelPrice < maxPrice(price) &&
				hotelCapacity > maxGuests(numberGuests) &&
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
			{error && <div className='error'>{error}</div>}

			<Search searchName={searchName} hotels={hotels} />
			<Row className='d-flex justify-content-around'>
				<Filters
					maxGuests={maxGuests}
					maxPrice={maxPrice}
					handleSearch={filterHotels}
				/>
			</Row>
			<Row className='d-flex justify-content-between'>
				<Col md={8}>
					<Row>
						{error && <div className='error'> {error} </div>}
						{filteredHotels.map((hotel) => {
							const { id, name, image, price, maxGuests } = hotel;
							pinList.push({
								lat: hotel.lat,
								lng: hotel.lng,
								name: hotel.name,
								maxGuests: 'Guest capacity ' + hotel.maxGuests,
								price: 'Price ' + hotel.price + ' euro',
							});

							return (
								<Col xs={12} md={5} lg={4} key={id}>
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
