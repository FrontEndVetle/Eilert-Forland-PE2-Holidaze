import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaCalendar, FaEuroSign, FaUserAlt, FaBed } from 'react-icons/fa';

//icons

function BookingInfo({
	days,
	price,
	totalPrice,
	guests,
	checkinDate,
	checkoutDate,
}) {
	return (
		<ListGroup variant='flush'>
			<h3 className='text-center'>Booking information</h3>
			<ListGroup.Item>
				<FaCalendar className='icons' /> Checkin {checkinDate}
			</ListGroup.Item>
			<ListGroup.Item>
				<FaCalendar className='icons' />
				CheckOut {checkoutDate}
			</ListGroup.Item>
			<ListGroup.Item>
				<FaBed className='icons' /> {days + ' Nights'}
			</ListGroup.Item>
			<ListGroup.Item>
				<FaEuroSign className='icons' />
				{'€' + totalPrice + ' Total'}
			</ListGroup.Item>
			<ListGroup.Item>
				<FaEuroSign className='icons' />
				{'€' + price + ' per person per night'}
			</ListGroup.Item>
			<ListGroup.Item>
				<FaUserAlt className='icons' />
				{guests + ' Guests'}
			</ListGroup.Item>
		</ListGroup>
	);
}

export default BookingInfo;
