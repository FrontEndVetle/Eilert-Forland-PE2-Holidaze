import React from 'react';
import ConfirmDelete from '../ConfirmDelete';
import { FaEnvelope } from 'react-icons/fa';

import { Col, Row, Card, ListGroup } from 'react-bootstrap/';
import InfoIcon from '../../ui/InfoIcon';

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
	historyPath: string;
	messageContent: object;
};

function EnquiriesList({
	id,
	name,
	email,
	createdAt,
	messageContent,
	deletePath,

	historyPath,
}: Props) {
	return (
		<>
			<Col xs={10}>
				<Card className='card-list'>
					<Card.Header className='text-center'>Sent {createdAt}</Card.Header>
					<Card.Body>
						<Row className='d-flex justify-content-center'>
							<Col md={6}>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<h2>{name}</h2>
									</ListGroup.Item>
									<ListGroup.Item>
										<InfoIcon
											small='Email'
											info={email}
											icon={<FaEnvelope />}
										/>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<div className='border-right d-none d-md-block d-lg-block'></div>

							<Col md={5}>{messageContent}</Col>
							<Col md={4}>
								<ConfirmDelete
									historyPath={historyPath}
									id={id}
									deletePath={deletePath}
								/>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}

export default EnquiriesList;
