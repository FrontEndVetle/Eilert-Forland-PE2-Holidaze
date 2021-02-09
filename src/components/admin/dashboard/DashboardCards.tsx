import React from 'react';

import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
	name: string;
	link: string;
};

function DashboardCards({ link, name }: Props) {
	return (
		<>
			<Col xs={12} sm={6} md={3}>
				<Card className='card'>
					<NavLink to={link}>
						<Card.Img
							variant='top'
							className='card__img'
							src=''
							alt='Admin utilities image'
						/>
						<ListGroup.Item>
							<h2 className='card__title'> {name}</h2>
						</ListGroup.Item>
					</NavLink>

					<NavLink to={link}>
						<Button className='card__btn btn btn__primary'>Select</Button>
					</NavLink>
				</Card>
			</Col>
		</>
	);
}

export default DashboardCards;
