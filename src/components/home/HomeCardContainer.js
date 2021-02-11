import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap/';
import HomeData from '../../data/Homepage.json';
import HomeInfoCards from './HomeInfoCards';

function CardContainer() {
	return (
		<Container>
			<Row className='content'>
				{HomeData.map((HomeDetail) => {
					const { id, title, image } = HomeDetail;
					const infoList = HomeDetail.information.map((info, i) => (
						<div key={i}>
							<Card.Text> {info}</Card.Text>
							<hr />
						</div>
					));

					return (
						<Col className='d-flex' xs={12} sm={6} lg={4} key={id}>
							<HomeInfoCards title={title} infoList={infoList} image={image} />{' '}
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CardContainer;
