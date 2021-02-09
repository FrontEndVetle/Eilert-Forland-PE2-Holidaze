import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronRight } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';

function BookDate({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	handleSelect,
	guestOptions,
	modalShow,
}) {
	return (
		<ListGroup variant='flush'>
			<h2 className='text-center'>Choose booking dates</h2>
			<Row container spacing={1} className='d-flex justify-content-between'>
				<Col xs={12} sm={5}>
					<DatePicker
						dateFormat='yyyy-MM-dd'
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						className='detail__datepicker'
					/>
				</Col>
				<Col xs={12} sm={1}>
					<FaChevronRight className='icons' />
				</Col>
				<Col xs={12} sm={5}>
					<DatePicker
						className='detail__datepicker'
						dateFormat='yyyy-MM-dd'
						selected={endDate}
						onChange={(date) => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						minDate={startDate}
					/>
				</Col>
			</Row>

			<ListGroup.Item>
				<Form.Group>
					<Form.Label>Number of guests</Form.Label>
					<Form.Control
						onChange={handleSelect}
						as='select'
						className='detail__guests'>
						{guestOptions}
					</Form.Control>
				</Form.Group>
				<Button className='detail__btn btn btn__action' onClick={modalShow}>
					Enquire about availability
				</Button>
			</ListGroup.Item>
		</ListGroup>
	);
}

export default BookDate;
