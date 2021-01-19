import React from 'react';
import Card from 'react-bootstrap/Card';
import Paper from '@material-ui/core/Paper';

function HomeInfoCards({ title, infoList, image }) {
	return (
		<Paper elevation={2}>
			<Card>
				<Card.Img className='card__img' variant='top' src={image} />
				<Card.Body className='d-flex flex-column card__body'>
					<Card.Title className='card__title card__title--special'>
						{title}
					</Card.Title>
					<Card.Text className='card__info'>{infoList} </Card.Text>
				</Card.Body>
			</Card>
		</Paper>
	);
}

export default HomeInfoCards;
