import React from 'react';

import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
	name: string;
	link: string;
	img: string;
};

function DashboardCards({ link, name, img }: Props) {
	return (
		<Card className='hotel-card'>
			<NavLink to={link}>
				<Card.Img
					variant='top'
					className='hotel-card__img'
					src={img}
					alt='Admin utilities image'
				/>
				<Card.Body>
					<Card.Title>
						<h2 className='hotel-card__title'> {name}</h2>
					</Card.Title>
					<ListGroup variant='flush'></ListGroup>
				</Card.Body>
			</NavLink>

			<NavLink to={link}>
				<Card.Body>
					<Button className='hotel-card__btn btn btn__primary'>Select</Button>
				</Card.Body>
			</NavLink>
		</Card>
	);
}

export default DashboardCards;
