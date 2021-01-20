import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { BASE_URL, headers } from '../../../constants/api';
import HotelItem from './HotelItem';
import Container from 'react-bootstrap/Container';
import BookDate from './BookDate';

function HomeDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL + 'establishments/' + id;
	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((json) => setDetail(json))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner animation='border' className='spinner' />;
	}

	return (
		<Container>
			<HotelItem
				info={detail.description}
				image={detail.image}
				name={detail.name}
			/>
			<BookDate />
		</Container>
	);
}

export default HomeDetail;
