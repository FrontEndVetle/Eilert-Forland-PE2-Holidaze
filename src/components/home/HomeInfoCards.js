import React from 'react';
import Card from 'react-bootstrap/Card';

function HomeInfoCards({ title, infoList, image }) {
	return (
		<Card>
			<Card.Img className='card__img' variant='top' src={image} />
			<Card.Body className='d-flex flex-column card__body'>
				<Card.Title className='card__title'>{title}</Card.Title>
				<Card.Text className='card__info'>{infoList} </Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HomeInfoCards;
