import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa';
import { Card, Button, Col, Row } from 'react-bootstrap';

function HotelInfo({ image, name, info, dining }) {
	return (
		<Card className='detail'>
			<Card.Img
				className='detail__img'
				variant='top'
				src={image}
				alt='Accommodation image'
			/>
			<Card.Body>
				<Card.Title>
					<h1 className='detail__title'>{name}</h1>
				</Card.Title>
				<hr />
				<Accordion className='accord d-md-none' defaultActiveKey='0'>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Information
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<Row className='d-flex align-items-center'>
									<Col xs={3}>
										<FaHome className='icons' />
									</Col>
									<Col xs={9}>
										<p>{info}</p>
									</Col>
								</Row>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='1'>
								Catering
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='1'>
							<Card.Body>
								<Row className='d-flex align-items-center'>
									<Col xs={3}>
										<FaGlassMartiniAlt className='icons' />
									</Col>
									<Col xs={9}>
										<p>{dining}</p>
									</Col>
								</Row>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<div className=' d-none d-md-block'>
					<Tabs defaultActiveKey='info' id='detailTab'>
						<Tab className='detail-tabs' eventKey='info' title='Information'>
							<Row className='d-flex align-items-center'>
								<Col md={2}>
									<FaHome className='icons' />
								</Col>
								<Col md={10}>
									<p>{info}</p>
								</Col>
							</Row>
						</Tab>
						<Tab className='detail-tabs' eventKey='catering' title='Catering'>
							<Row className='d-flex align-items-center'>
								<Col md={2}>
									<FaGlassMartiniAlt className='icons' />
								</Col>
								<Col md={10}>
									<p>{dining}</p>
								</Col>
							</Row>
						</Tab>
					</Tabs>
				</div>
			</Card.Body>
		</Card>
	);
}

HotelInfo.propTypes = {
	image: PropTypes.string,
	dining: PropTypes.string,
	info: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default HotelInfo;
