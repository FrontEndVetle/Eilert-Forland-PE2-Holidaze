import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEuroSign, FaBed } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HotelCards({ name, id, image, price, maxGuests, linkPath, btnText }) {
	return (
		<>
			<Card className='hotel-card'>
				<Card.Img
					variant='top'
					className='hotel-card__img'
					src={image}
					alt='Accommodation image'
				/>
				<Card.Body>
					<Card.Title>
						<h2 className='hotel-card__title'> {name}</h2>
					</Card.Title>
					<ListGroup className='hotel-card__text' variant='flush'>
						<ListGroup.Item></ListGroup.Item>
						<ListGroup.Item>
							<Card.Text>
								<FaEuroSign className='icons' /> {price}
							</Card.Text>
						</ListGroup.Item>
						<ListGroup.Item>
							<Card.Text>
								<FaBed className='icons' />
								{maxGuests}
							</Card.Text>
						</ListGroup.Item>
					</ListGroup>
				</Card.Body>
				<NavLink to={linkPath + id}>
					<Button className='hotel-card__btn btn btn__primary'>
						{btnText}
					</Button>
				</NavLink>
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
