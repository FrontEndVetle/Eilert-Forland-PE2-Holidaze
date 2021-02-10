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
		<Card className='card'>
			<NavLink to={link}>
				<Card.Img
					variant='top'
					className='card__img'
					src={img}
					alt='Admin utilities image'
				/>
				<Card.Body>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2 className='card__title'> {name}</h2>
						</ListGroup.Item>
					</ListGroup>
				</Card.Body>
			</NavLink>

			<NavLink to={link}>
				<Card.Body>
					<Button className='card__btn btn btn__primary'>Select</Button>
				</Card.Body>
			</NavLink>
		</Card>
	);
}

export default DashboardCards;
