import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
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
						<Col xs={12} sm={5} md={4} key={id}>
							<HomeInfoCards title={title} infoList={infoList} image={image} />{' '}
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CardContainer;
