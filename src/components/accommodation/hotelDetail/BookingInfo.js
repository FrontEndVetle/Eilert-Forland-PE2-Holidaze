import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaCalendar, FaEuroSign, FaUserAlt, FaBed } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

function BookingInfo({
	days,
	price,
	totalPrice,
	guests,
	checkinDate,
	checkoutDate,
}) {
	return (
		<Card className='detail'>
			<Card.Title>
				<h3 className='detail__title'>Booking information</h3>
			</Card.Title>
			<Card.Body>
				<Card.Text className='detail__text'>
					<ListGroup variant='flush'>
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
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default BookingInfo;
