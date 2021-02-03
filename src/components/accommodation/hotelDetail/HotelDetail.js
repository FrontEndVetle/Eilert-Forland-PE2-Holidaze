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
import Swal from 'sweetalert2';
import moment from 'moment';

function HomeDetail() {
	const [detail, setDetail] = useState([]);
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

	//number of guests
	const handleSelect = (e) => {
		setGuests(e.target.value);
	};

	//Use maxGuests to secure you cant choose more guests then max
	let guestOptions = [];
	for (let i = 0; i < detail.maxGuests; i++) {
		guestOptions.push(
			<option key={i} value={1 + i}>
				{1 + i} Guest
			</option>
		);
	}

	//convert date to correct format compared to PHP backend format.
	let checkoutDate = moment(endDate).format('YYYY-MM-DD');
	let checkinDate = moment(startDate).format('YYYY-MM-DD');

	//display modal or hide
	const modalClose = () => setShow(false);
	const modalShow = () => setShow(true);

	//post enquiry
	function onSubmit(data) {
		const urlEnquiry = BASE_URL + 'enquiries';
		console.log('data', data);

		FETCH_OPTIONS.method = 'POST';

		FETCH_OPTIONS.body = JSON.stringify(data);

		// send every
		fetch(urlEnquiry, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
		setShow(false);

		Swal.fire({
			title: 'Enquiry is Sent!',
			text: 'We reply within 24 hours',
			icon: 'success',
			confirmButtonText: 'OK',
		});
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
						guestOptions={guestOptions}
					/>
				</Col>
				<Col>
					<BookingInfo
						days={days}
						price={detail.price}
						totalPrice={totalPrice}
						guests={guests}
						startDate={startDate}
						checkinDate={checkinDate}
						checkoutDate={checkoutDate}
						modalShow={modalShow}
					/>
				</Col>
			</Row>
			<EnquiryModal
				hotel={detail.name}
				checkinDate={checkinDate}
				checkoutDate={checkoutDate}
				modalClose={modalClose}
				show={show}
				onSubmit={onSubmit}
			/>
		</Container>
	);
}

export default HomeDetail;
