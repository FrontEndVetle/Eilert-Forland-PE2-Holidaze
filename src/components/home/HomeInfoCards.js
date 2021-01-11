import React from 'react';
import Card from 'react-bootstrap/Card';

function HomeInfoCards({ title, infoList, image }) {
	return (
		<Card>
			<Card.Img variant='top' src={image} />
			<Card.Body className='d-flex flex-column'>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{infoList} </Card.Text>
			</Card.Body>
		</Card>
	);
}

export default HomeInfoCards;
