import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Col from 'react-bootstrap/Col';

function MessageList({ name, email, message, createdAt, checkIn, checkOut }) {
	return (
		<Col sm={12}>
			<p>{createdAt} </p>
			<Paper elevation={2}>
				<Card>
					<Card.Body>
						<Card.Title>Card Title</Card.Title>
						<Card.Text>{message}</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush'>
						<ListGroupItem>Checkin={checkIn} </ListGroupItem>
						<ListGroupItem>checkOut={checkOut} </ListGroupItem>
						<ListGroupItem>Vestibulum at eros</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Card.Link href='#'>Card Link</Card.Link>
						<Card.Link href='#'>Another Link</Card.Link>
					</Card.Body>
				</Card>
			</Paper>
		</Col>
	);
}

export default MessageList;
