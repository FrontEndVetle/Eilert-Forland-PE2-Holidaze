import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Col from 'react-bootstrap/Col';

function EnquiriesList({ name, email, message, createdAt, checkIn, checkOut }) {
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
								<Card.Title>{name} </Card.Title>
								<Card.Text>{message}</Card.Text>
							</Card.Body>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Checkin: {checkIn} </ListGroupItem>
								<ListGroupItem>checkOut: {checkOut} </ListGroupItem>
							</ListGroup>
						</Col>
						<Divider orientation='vertical' flexItem />
						<Col sm={5}>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Checkin: {checkIn} </ListGroupItem>
								<ListGroupItem>checkOut: {checkOut} </ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
					<Card.Body>
						<Card.Link>
							<Button className='card__btn btn' variant='secondary' block>
								Delete Enquiry
							</Button>
						</Card.Link>
					</Card.Body>
				</Card>
			</Paper>
		</Col>
	);
}

export default EnquiriesList;
