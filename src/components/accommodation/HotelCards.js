import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEuroSign, FaBed } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function HotelCards({ name, id, image, price, maxGuests, linkPath, btnText }) {
	return (
		<>
			<Card className='hotel-card'>
				<Row className='d-flex justify-content-between'>
					<Col xs={12} sm={12} lg={6}>
						<Card.Img
							variant='top'
							className='hotel-card__img'
							src={image}
							alt='Accommodation image'
						/>
					</Col>
					<Col xs={12} lg={6}>
						<Card.Body>
							<Card.Title>
								<h4 className='hotel-card__title'> {name}</h4>
							</Card.Title>
							<ListGroup className='hotel-card__text' variant='flush'>
								<ListGroup.Item></ListGroup.Item>
								<ListGroup.Item>
									<Card.Text>
										<FaEuroSign className='icons' /> {price + ' euros'}
									</Card.Text>
								</ListGroup.Item>
								<ListGroup.Item>
									<Card.Text>
										<FaBed className='icons' />
										{'Guest capacity ' + maxGuests}
									</Card.Text>
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>

						<NavLink to={linkPath + id}>
							<Button className='hotel-card__btn btn btn__primary'>
								{btnText}
							</Button>
						</NavLink>
					</Col>
				</Row>
			</Card>
		</>
	);
}
HotelCards.propTypes = {
	image: PropTypes.string,
	id: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	maxGuests: PropTypes.number.isRequired,
	btnText: PropTypes.string.isRequired,
	linkPath: PropTypes.string.isRequired,
};

export default HotelCards;
