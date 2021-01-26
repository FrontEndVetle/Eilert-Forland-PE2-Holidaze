import React, { useState, useEffect } from 'react';
import { BASE_URL, FETCH_OPTIONS } from '../../constants/api';
import HotelCards from '../accommodation/HotelCards';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Search from '../util/filter/Search';
import Filters from '../util/filter/Filters';
import Spinner from 'react-bootstrap/Spinner';

function GetHotels() {
	const [hotels, setHotels] = useState([]);
	const [error, setError] = useState(null);
	const [filteredHotels, setFilteredHotels] = useState([]);
	const [loading, setLoading] = useState(true);

	const url = BASE_URL + 'establishments';
	let hotelList = [];

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.finally(() => setLoading(false))
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

	if (loading) {
		return <Spinner animation='border' className='spinner' />;
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
		<Container>
			<Search searchName={searchName} hotels={hotels} />
			<Row className='justify-content-between filters'>
				<Filters
					maxGuests={maxGuests}
					maxPrice={maxPrice}
					handleSearch={filterHotels}
				/>
			</Row>
			<Row className='justify-content-between'>
				<Col sm={12} md={8}>
					<Row>
						{error && <div className='error'> {error} </div>}
						{filteredHotels.map((hotel) => {
							const { id, name, image, price, maxGuests } = hotel;
							hotelList.push({
								lat: hotel.lat,
								lng: hotel.lng,
								name: hotel.name,
							});

							return (
								<HotelCards
									maxGuests={maxGuests}
									name={name}
									image={image}
									price={price}
									id={id}
								/>
							);
						})}
					</Row>
				</Col>
				<Col sm={12} md={4}>
					htorhjktorthr
				</Col>
			</Row>
		</Container>
	);
}

export default GetHotels;
