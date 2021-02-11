import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';

import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';

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
					<h1 detail__title>{name}</h1>
				</Card.Title>
				<Accordion className='d-md-none' defaultActiveKey='0'>
					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Information
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<FaHome className='icons' /> {info}
									</ListGroup.Item>
								</ListGroup>
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
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<FaGlassMartiniAlt className='icons' /> {dining}
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<div className='d-none d-md-block'>
					<Tabs defaultActiveKey='info' id='uncontrolled-tab-example'>
						<Tab eventKey='info' title='Information'>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<FaHome className='icons' /> {info}
								</ListGroup.Item>
							</ListGroup>
						</Tab>
						<Tab eventKey='catering' title='Catering'>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<FaGlassMartiniAlt className='icons' /> {dining}
								</ListGroup.Item>
							</ListGroup>
						</Tab>
					</Tabs>
				</div>
			</Card.Body>
		</Card>
	);
}

export default HotelInfo;
