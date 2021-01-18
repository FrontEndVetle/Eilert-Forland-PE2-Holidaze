import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Search from '../util/filter/Search';
import Filters from '../util/filter/Filters';

function GetHotels() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [filteredHotels, setFilteredHotels] = useState([]);

	const url = BASE_URL + 'establishments';
	const options = { headers };
	let hotelList = [];

	useEffect(() => {
		fetch(url, options)
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
			.catch((error) => console.log(error));
	}, []);

	let price;
	let numberGuests;
	let searchValue;

	function maxGuests(visitors) {
		return (numberGuests = visitors);
	}

	function maxPrice(max) {
		return (price = max);
	}

	function searchName(e) {
		searchValue = e.target.value.toLowerCase();
		return searchValue;
	}

	const filterHotels = function filter() {
		//create a new array from the hotels array
		const filteredArray = hotels.filter(function (acco) {
			//each hotel name to lowercase to compare with search value
			const hotelPrice = acco.price;
			const hotelCapacity = acco.maxGuests;
			const lowerCaseName = acco.name.toLowerCase();

			//check if the hotel name includes the search value
			if (
				hotelPrice < maxPrice(price) &&
				hotelCapacity > maxGuests(numberGuests) &&
				lowerCaseName.includes(searchName(searchValue))
			) {
				//add to filtered array

				return true;
			}

			return false;
		});
		//set filtered hotels to the new array
		setFilteredHotels(filteredArray);
	};

	/*const filterHotels = function filter(e) {
		const searchValue = e.target.value.toLowerCase();
		//create a new array from the hotels array
		const filteredArray = hotels.filter(function (acco) {
			//each hotel name to lowercase to compare with search value
			const lowerCaseName = acco.name.toLowerCase();
			const x = acco.price;
			//check if the hotel name includes the search value
			if (lowerCaseName.includes(searchValue) && x < maxPrice(price)) {
				//add to filtered array

				return true;
			}

			return false;
		});
		//set filtered hotels to the new array
		setFilteredHotels(filteredArray);
	};*/
	return (
		<Container>
			<Search searchName={searchName} handleSearch={filterHotels} />
			<Filters
				maxGuests={maxGuests}
				maxPrice={maxPrice}
				handleSearch={filterHotels}
			/>
			<Row className='justify-content-between'>
				{error && <div className='error'> {error} </div>}
				{filteredHotels.map((hotel) => {
					const { id, name, image, price } = hotel;
					hotelList.push({ lat: hotel.lat, lng: hotel.lng, name: hotel.name });

					return (
						<>
							<Col sm={6} md={4} md={3}>
								<HotelCards key={id} name={name} image={image} price={price} />
							</Col>
						</>
					);
				})}{' '}
			</Row>
		</Container>
	);
}

export default GetHotels;
