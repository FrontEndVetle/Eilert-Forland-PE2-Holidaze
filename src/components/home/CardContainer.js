import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeData from '../../data/Homepage.json';
import HomeInfoCards from './HomeInfoCards';

function CardContainer() {
	return (
		<Row className='justify-content-between'>
			{HomeData.map((HomeDetail) => {
				const { id, title, image } = HomeDetail;
				const infoList = HomeDetail.information.map((info) => (
					<li key={info}>{info}</li>
				));

				return (
					<Col sm={6} md={3} key={id}>
						<HomeInfoCards title={title} infoList={infoList} image={image} />
					</Col>
				);
			})}
		</Row>
	);
}

export default CardContainer;
