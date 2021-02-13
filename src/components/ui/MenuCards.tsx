import React from 'react';

import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

type Props = {
	title: string;
	link?: string;
	img: string;
	infoList: object;
	btn?: object;
};

function DashboardCards({ title, img, infoList, btn }: Props) {
	return (
		<Card className='card-list'>
			<Card.Img
				variant='top'
				className='card-list__img'
				src={img}
				alt='Admin utilities image'
			/>
			<Card.Body>
				<Card.Title>
					<h2 className='card-list__title'> {title}</h2>
				</Card.Title>
				{infoList}
			</Card.Body>
			<Row>
				<Col>
					<Card.Body>{btn}</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default DashboardCards;
