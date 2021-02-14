import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import InfoIcon from '../ui/InfoIcon';

function HotelInfo({ image, name, info, dining, address }) {
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
					<h2 className='detail__title'> {name} </h2>
				</Card.Title>
				<hr />
				<Accordion className='accord d-md-none' defaultActiveKey='0'>
					<Card>
						<Card.Header className='detail__head'>
							<Accordion.Toggle
								as={Button}
								variant='link'
								eventKey='0'
								className='detail__head'>
								<p className='detail__tabs'> Information</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<InfoIcon info={info} icon={<FaHome />} />
									</ListGroup.Item>
									<ListGroup.Item>
										<InfoIcon info={address} icon={<FaHome />} />
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Accordion.Collapse>
					</Card>

					<Card>
						<Card.Header className='detail__head'>
							<Accordion.Toggle
								as={Button}
								variant='link'
								eventKey='1'
								className='detail__head'>
								<p className='detail__tabs'> Catering</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='1'>
							<Card.Body>
								<ListGroup variant='flush'>
									<InfoIcon info={dining} icon={<FaGlassMartiniAlt />} />
								</ListGroup>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<hr />
				</Accordion>
				<div className=' d-none d-md-block'>
					<Tabs
						defaultActiveKey='info'
						id='detailTab'
						className=' detail__tabs'>
						<Tab className='detail-tabs' eventKey='info' title='Information'>
							<InfoIcon info={info} icon={<FaHome />} />
						</Tab>
						<Tab className='detail-tabs' eventKey='catering' title='Catering'>
							<InfoIcon info={dining} icon={<FaGlassMartiniAlt />} />
						</Tab>
						<Tab className='detail-tabs' eventKey='address' title='Address'>
							<InfoIcon info={address} icon={<FaHome />} />
						</Tab>
					</Tabs>
					<hr />
				</div>
			</Card.Body>
		</Card>
	);
}

HotelInfo.propTypes = {
	image: PropTypes.string,
	dining: PropTypes.string,
	info: PropTypes.string,
	address: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default HotelInfo;
