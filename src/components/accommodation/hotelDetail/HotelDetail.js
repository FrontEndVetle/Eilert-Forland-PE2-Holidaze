import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../../constants/api';
import HotelInfo from './HotelInfo';
import EnquiryModal from './EnquiryModal';
import Container from 'react-bootstrap/Container';
import BookDate from './BookDate';
import BookingInfo from './BookingInfo';

function HomeDetail() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	const [startDate, setStartDate] = useState(new Date('2021/01/01'));
	const [endDate, setEndDate] = useState(new Date('2021/02/01'));
	const [guests, setGuests] = useState(1);
	const [show, setShow] = useState(false);

	let dining;
	let { id } = useParams();

	const url = BASE_URL + 'establishments/' + id;

	useEffect(() => {
		fetch(url, FETCH_OPTIONS)
			.then((response) => response.json())
			.then((json) => setDetail(json))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner animation='border' className='spinner' />;
	}

	if (detail.selfCatering === true) {
		dining =
			'This accommodation has self catering. Make delicous dinners with local ingredients. Kitchen applienses is included.';
	} else {
		dining =
			'You will recive breakfast and evening meals seven days a week in the Hotel resturant ';
	}

	const differenceTime = endDate.getTime() - startDate.getTime();
	const days = differenceTime / (1000 * 3600 * 24);
	const totalPrice = detail.price * days * guests;

	const handleSelect = (e) => {
		console.log(e);
		setGuests(e);
	};

	//convert date object to string to display info
	let checkinnDate = startDate.toLocaleDateString();
	let checkoutDate = endDate.toLocaleDateString();

	//display modal or hide
	const modalClose = () => setShow(false);
	const modalShow = () => setShow(true);

	//post enquiry
	function onSubmit(data) {
		const urlEnquiry = BASE_URL + 'enquiries';

		console.log('data', data);
		let validated = document.querySelector('.validated');
		validated.style.display = 'block';

		FETCH_OPTIONS.method = 'POST';

		FETCH_OPTIONS.body = JSON.stringify(data);

		// send every
		fetch(urlEnquiry, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
	}

	return (
		<Container>
			<Row>
				<Col>
					<HotelInfo
						info={detail.description}
						image={detail.image}
						name={detail.name}
						dining={dining}
					/>
					<BookDate
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
						handleSelect={handleSelect}
						guests={guests}
					/>
				</Col>
				<Col>
					<BookingInfo
						days={days}
						price={detail.price}
						totalPrice={totalPrice}
						guests={guests}
						startDate={startDate}
						checkinnDate={checkinnDate}
						checkoutDate={checkoutDate}
						modalShow={modalShow}
					/>
				</Col>
			</Row>
			<EnquiryModal modalClose={modalClose} show={show} onSubmit={onSubmit} />
		</Container>
	);
}

export default HomeDetail;
