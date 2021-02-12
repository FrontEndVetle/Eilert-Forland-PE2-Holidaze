import React from 'react';
import { Col, Row, Card, Container } from 'react-bootstrap/';
import HomeData from '../../data/Homepage.json';
import InfoIcon from '../ui/InfoIcon';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaInfo } from 'react-icons/fa';
import MenuCards from '../ui/MenuCards';

function CardContainer() {
	return (
		<Container>
			<Row className='content'>
				{HomeData.map((HomeDetail) => {
					const { id, title, image } = HomeDetail;
					const infoList = HomeDetail.information.map((info, i) => (
						<div key={i}>
							<ListGroup variant='flush' className='card__text'>
								<ListGroup.Item>
									<InfoIcon info={info} icon={<FaInfo />} />
								</ListGroup.Item>
							</ListGroup>
							<hr />
						</div>
					));

					return (
						<Col className='d-flex' xs={12} sm={6} lg={4} key={id}>
							<MenuCards title={title} infoList={infoList} img={image} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CardContainer;
