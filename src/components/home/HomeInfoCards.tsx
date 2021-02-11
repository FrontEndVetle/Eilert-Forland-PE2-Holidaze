import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

type Props = {
	title: string;
	infoList: string;
	image: string;
};

function HomeInfoCards({ title, infoList, image }: Props) {
	return (
		<Card className='hotel-card'>
			<Card.Img
				variant='top'
				className='card__img'
				src={image}
				alt='Homepage information image'
			/>
			<Card.Body className='flex'>
				<Card.Title>
					<h2 className='hotel-card__title font-special'> {title}</h2>
				</Card.Title>

				<ListGroup variant='flush' className='card__text'>
					<ListGroup.Item>{infoList}</ListGroup.Item>
				</ListGroup>
			</Card.Body>
			<NavLink to='/accommodation'>
				<Button className=' hotel-card__btn btn'>Accommodations</Button>
			</NavLink>
		</Card>
	);
}

export default HomeInfoCards;
