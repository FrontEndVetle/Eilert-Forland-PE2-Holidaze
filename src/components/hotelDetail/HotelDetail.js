import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BASE_URL, headers } from '../../constants/api';
import HotelInfo from './HotelInfo';
import EnquiryModal from './EnquiryModal';
import BookDate from './BookDate';
import BookingInfo from './BookingInfo';
import Swal from 'sweetalert2';
import moment from 'moment';
import HotelMap from '../ui/hotelMap/HotelMap';

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

	const options = { headers };

	useEffect(() => {
		fetch(url, options)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// handle error
				if (data.error) {
					setDetail([]);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
						footer: 'Please try and reload the ',
					});
				} else {
					setDetail(data);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner className='spinner' animation='border' variant='primary' />;
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
				{' '}
				{1 + i}
				Guest{' '}
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

		const methods = { headers, method: 'POST', body: JSON.stringify(data) };

		// send every
		fetch(urlEnquiry, methods)
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

	const pinList = [];
	pinList.push({
		lat: detail.lat,
		lng: detail.lng,
		name: detail.name,
		maxGuests: (
			<ListGroup.Item>
				<p> Guest capacity: {detail.maxGuests} </p>{' '}
			</ListGroup.Item>
		),
		price: (
			<ListGroup.Item>
				<p>
					Price: {detail.price}
					euro
				</p>
			</ListGroup.Item>
		),
		address: detail.address,
	});

	return (
		<Container>
			<Row className='content d-flex justify-content-between'>
				<Col xs={12} md={5} md={6}>
					<HotelInfo
						info={detail.description}
						image={detail.image}
						name={detail.name}
						dining={dining}
					/>{' '}
					<div className='detail'>
						<div className=' detail__map'>
							<HotelMap pinList={pinList} mapZoom={10} />{' '}
						</div>{' '}
					</div>{' '}
				</Col>{' '}
				<Col xs={12} md={6} lg={5}>
					<BookDate
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
						handleSelect={handleSelect}
						guestOptions={guestOptions}
						modalShow={modalShow}
					/>{' '}
					<BookingInfo
						days={days}
						price={detail.price}
						totalPrice={totalPrice}
						guests={guests}
						startDate={startDate}
						checkinDate={checkinDate}
						checkoutDate={checkoutDate}
					/>{' '}
				</Col>{' '}
			</Row>{' '}
			<EnquiryModal
				hotel={detail.name}
				checkinDate={checkinDate}
				checkoutDate={checkoutDate}
				modalClose={modalClose}
				show={show}
				onSubmit={onSubmit}
			/>{' '}
		</Container>
	);
}

export default HomeDetail;
