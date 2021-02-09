import React from 'react';
import ConfirmDelete from '../../util/ConfirmDelete';

import { Col, Row, Card, ListGroup } from 'react-bootstrap/';
import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa';

type Props = {
	id: string;
	name: string;
	email?: string;
	message?: string;
	createdAt: number;
	checkIn?: number;
	checkOut?: number;
	deletePath?: string;
	hotelName?: string;
};

function EnquiriesList({
	id,
	name,
	email,
	message,
	createdAt,
	checkIn,
	checkOut,
	deletePath,
	hotelName,
}: Props) {
	return (
		<>
			<Col xs={10}>
				<Card className='card'>
					<Card.Header>Sent {createdAt}</Card.Header>
					<Card.Body>
						<Row>
							<Col md={6}>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<h2>{name}</h2>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaGlassMartiniAlt className='icons' />
										<p>{message}</p>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaGlassMartiniAlt className='icons' />
										<p>{email}</p>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<div className='border-right d-none d-md-block d-lg-block'></div>

							<Col md={5}>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<h2>{hotelName}</h2>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaGlassMartiniAlt className='icons' />
										<p>{checkIn}</p>
									</ListGroup.Item>
									<ListGroup.Item>
										<FaGlassMartiniAlt className='icons' />
										<p>{checkOut}</p>
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Card.Body>

					<ConfirmDelete id={id} deletePath={deletePath} />
				</Card>
			</Col>
		</>
	);
}

export default EnquiriesList;
