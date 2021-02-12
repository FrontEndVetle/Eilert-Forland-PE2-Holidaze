import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaCalendar, FaEuroSign, FaUserAlt, FaBed } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ListInfoIcon from '../../ui/ListInfoIcon';

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
				<Row>
					<Col xs={12} lg={6}>
						<ListGroup variant='flush'>
							<ListInfoIcon
								small='Checkin'
								info={checkinDate}
								icon={<FaCalendar />}
							/>
							<ListInfoIcon
								small='Checkin'
								info={checkinDate}
								icon={<FaCalendar />}
							/>
							<ListInfoIcon small='Nights' info={days} icon={<FaBed />} />
						</ListGroup>
					</Col>
					<Col xs={12} lg={6}>
						<ListGroup variant='flush'>
							<ListInfoIcon
								small='Total price'
								info={'€' + totalPrice}
								icon={<FaEuroSign />}
							/>
							<ListInfoIcon small='Guests' info={guests} icon={<FaUserAlt />} />

							<ListInfoIcon
								small='pr night pr person'
								info={'€' + price}
								icon={<FaEuroSign />}
							/>
						</ListGroup>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default BookingInfo;
