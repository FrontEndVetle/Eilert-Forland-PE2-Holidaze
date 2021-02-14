import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

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
		<Card className='detail'>
			<Card.Title className='detail__head'>
				<h2 className='detail__title'>Choose booking dates</h2>
				<hr />
			</Card.Title>
			<Card.Body>
				<ListGroup variant='flush'>
					<ListGroup.Item>
						<Row
							spacing={1}
							className='d-flex justify-content-center detail__pickers'>
							<Col xs={12} sm={4}>
								<p className='text-center font-special'>checkin</p>
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
							<Col xs={12} sm={4}>
								<p className='text-center font-special'>checkout</p>
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
					</ListGroup.Item>
					<ListGroup.Item>
						<Row className='d-flex justify-content-center'>
							<Col xs={6}>
								<Form.Group onChange={handleSelect}>
									<Form.Label>Number of guests</Form.Label>
									<Form.Control className='detail__guests' as='select'>
										{guestOptions}
									</Form.Control>
								</Form.Group>
							</Col>
							<Col xs={6}>
								<Button
									variant='danger'
									className='detail__btn'
									onClick={modalShow}>
									SEND ENQUIRY
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	);
}

BookDate.propTypes = {
	endDate: PropTypes.instanceOf(Date),
	startDate: PropTypes.instanceOf(Date),
	handleSelect: PropTypes.func,
	setStartDate: PropTypes.func,
	setEndDate: PropTypes.func,
	guestOptions: PropTypes.array,
	modalSHow: PropTypes.func,
};

export default BookDate;
