import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaCalendar, FaEuroSign, FaUserAlt, FaBed } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import InfoIcon from '../ui/InfoIcon';
import PropTypes from 'prop-types';

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
			<Card.Title className='detail__head'>
				<h3 className='detail__title'> Booking information </h3>
			</Card.Title>
			<Card.Body>
				<Row>
					<Col xs={12} lg={6}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<InfoIcon
									small='Checkin'
									info={checkinDate}
									icon={<FaCalendar />}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<InfoIcon
									small='Checkout'
									info={checkoutDate}
									icon={<FaCalendar />}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<InfoIcon small='Nights' info={days} icon={<FaBed />} />
							</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col xs={12} lg={6}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<InfoIcon
									small='Total price'
									info={'€' + totalPrice}
									icon={<FaEuroSign />}
								/>
							</ListGroup.Item>
							<ListGroup.Item>
								<InfoIcon small='Guests' info={guests} icon={<FaUserAlt />} />
							</ListGroup.Item>
							<ListGroup.Item>
								<InfoIcon
									small='pr night pr person'
									info={'€' + price}
									icon={<FaEuroSign />}
								/>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

BookDate.propTypes = {
	checkinDate: PropTypes.instanceOf(Date),
	checkoutDate: PropTypes.instanceOf(Date),
	price: PropTypes.string,
	guests: PropTypes.number,
	days: PropTypes.number,
	totalPrice: PropTypes.number,
};

export default BookingInfo;
