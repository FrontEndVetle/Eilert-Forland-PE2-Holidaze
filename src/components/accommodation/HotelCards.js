import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function HotelCards({ name, id, image, price }) {
	return (
		<Card>
			<Card.Img className='card__img' variant='top' src={image} />
			<Card.Body className='d-flex flex-column card__body'>
				<Card.Title className='card__title card__title--special'>
					{name}
				</Card.Title>
				<Card.Text className='card__info'>{price} </Card.Text>
				<Link to={'hotel/' + id}>
					<Button variant='secondary' block>
						View
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default HotelCards;
