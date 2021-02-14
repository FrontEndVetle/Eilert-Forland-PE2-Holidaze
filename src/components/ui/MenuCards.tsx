import React from 'react';

import Card from 'react-bootstrap/Card';
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
		<Card className='card-list '>
			<Card.Img
				variant='top'
				className='card-list__img'
				src={img}
				alt='Admin utilities image'
			/>
			<Card.Body>
				<Card.Title>
					<h3 className='card-list__title'> {title}</h3>
				</Card.Title>
				{infoList}
			</Card.Body>
			<Row>
				<Col className='text-center'>
					<Card.Body>{btn}</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}

export default DashboardCards;
