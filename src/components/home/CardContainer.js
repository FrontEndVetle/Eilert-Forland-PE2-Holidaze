import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HomeData from '../../data/Homepage.json';
import HomeInfoCards from './HomeInfoCards';

function CardContainer() {
	return (
		<Container>
			<Row className='justify-content-between'>
				{HomeData.map((HomeDetail) => {
					const { id, title, image } = HomeDetail;
					const infoList = HomeDetail.information.map((info) => (
						<li key={info}>{info}</li>
					));

					return (
						<Col sm={6} md={4} md={3} key={id}>
							<HomeInfoCards title={title} infoList={infoList} image={image} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CardContainer;
