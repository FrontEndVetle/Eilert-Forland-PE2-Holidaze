import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function HotelCards({ name, id, image, price, maxGuests, linkPath, btnText }) {
	return (
		<>
			<Card>
				<NavLink to={linkPath + id}>
					<Card.Img
						variant='top'
						className='card__img'
						src={image}
						alt='Accommodation image'
					/>
					<Card.Body>
						<ListGroup className='card__text' variant='flush'>
							<ListGroup.Item>
								<h2 className='card__title'> {name}</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Card.Text>{price}</Card.Text>
							</ListGroup.Item>
							<ListGroup.Item>
								<Card.Text>{maxGuests}</Card.Text>
							</ListGroup.Item>
						</ListGroup>
					</Card.Body>
				</NavLink>

				<NavLink to={linkPath + id}>
					<Button className='card__btn btn btn__primary'>{btnText}</Button>
				</NavLink>
			</Card>
		</>
	);
}
HotelCards.propTypes = {
	image: PropTypes.string,
};

export default HotelCards;
