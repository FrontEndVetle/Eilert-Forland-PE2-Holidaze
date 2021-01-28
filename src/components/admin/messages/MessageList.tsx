import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Col from 'react-bootstrap/Col';
import ConfirmDelete from '../../util/ConfirmDelete';

type Props = {
	id: string;
	name: string;
	email: string;
	message: string;
	createdAt: number;
	checkIn: number;
	checkOut: number;
	deletePath: string;
	hotelName: string;
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
		<Col sm={12}>
			<Paper elevation={2}>
				<Card>
					<Card.Footer>
						<small className='text-muted'>Sent {createdAt} </small>
					</Card.Footer>
					<Row className='justify-content-between filters'>
						<Col sm={5}>
							<Card.Body>
								<Card.Title>
									<h2>{name}</h2>{' '}
								</Card.Title>
								<Card.Text>{message}</Card.Text>
							</Card.Body>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>E-mail: {email} </ListGroupItem>
							</ListGroup>
						</Col>
						<Divider orientation='vertical' flexItem />
						<Col sm={5}>
							<Card.Title>
								<h3>{hotelName}</h3>
							</Card.Title>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Checkin: {checkIn} </ListGroupItem>
								<ListGroupItem>checkout: {checkOut} </ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Card.Body>
						<Card.Link>
							<ConfirmDelete id={id} deletePath={deletePath} />
						</Card.Link>
					</Card.Body>
				</Card>
			</Paper>
			<Divider className='mt-5' />
		</Col>
	);
}

export default EnquiriesList;
