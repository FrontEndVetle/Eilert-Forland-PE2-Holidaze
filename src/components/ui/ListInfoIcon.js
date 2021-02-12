import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaCalendar, FaEuroSign, FaUserAlt, FaBed } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

function ListInfoIcon({ small, info, icon }) {
	return (
		<ListGroup.Item>
			<Row className='d-flex align-items-center'>
				<Col xs={3}>
					<div className='icons'>{icon}</div>
				</Col>
				<Col xs={9}>
					<small>{small} </small>
					<p> {info}</p>
				</Col>
			</Row>
		</ListGroup.Item>
	);
}

export default ListInfoIcon;
