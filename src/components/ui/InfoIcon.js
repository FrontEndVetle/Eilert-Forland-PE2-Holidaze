import React from 'react';
import { Row, Col } from 'react-bootstrap';

function InfoIcon({ small, info, icon }) {
	return (
		<Row className='d-flex align-items-center'>
			<Col xs={3}>
				<div className='icons'>{icon}</div>
			</Col>
			<Col xs={9}>
				<small>{small} </small>
				<p> {info}</p>
			</Col>
		</Row>
	);
}

export default InfoIcon;
