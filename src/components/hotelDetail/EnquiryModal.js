import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your full name')
		.min(3, 'name must have minimum 3 letters'),

	email: yup.string().required('Please write your Email').email(),
});

function EnquiryModal({
	hotel,
	checkoutDate,
	checkinDate,
	modalClose,
	show,
	onSubmit,
}) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<Modal show={show} onHide={modalClose} centered>
			<Modal.Header className='detail__head' closeButton>
				<Modal.Title>SEND ENQUIRY</Modal.Title>
			</Modal.Header>

			<Form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Modal.Body>
					<Row>
						<Col xs={12} sm={6}>
							<Form.Row>
								<Form.Group as={Col} md='10' controlId='name'>
									<Form.Label>Full name</Form.Label>
									<Form.Control
										type='text'
										name='name'
										ref={register}
										isInvalid={errors.name}
										placeholder='Full name..'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.name && <p>{errors.name.message}</p>}
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='10' controlId='email'>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='text'
										name='email'
										ref={register}
										isInvalid={errors.email}
										placeholder='Enter email'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.email && <p>{errors.email.message}</p>}
									</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
						</Col>
						<Col xs={12} sm={6}>
							<Form.Row>
								<Form.Group as={Col} md='12' controlId='hotel'>
									<Form.Label>Hotel Name</Form.Label>
									<Form.Control
										type='text'
										name='establishmentId'
										ref={register}
										defaultValue={hotel}
										readOnly
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md='12' controlId='checkin'>
									<Form.Label>Checkin</Form.Label>
									<Form.Control
										type='text'
										name='checkIn'
										ref={register}
										defaultValue={checkinDate}
										readOnly
									/>
								</Form.Group>

								<Form.Group as={Col} md='12' controlId='validationFormik05'>
									<Form.Label>Checkout</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter your name..'
										name='checkOut'
										ref={register}
										readOnly
										defaultValue={checkoutDate}
									/>
								</Form.Group>
							</Form.Row>
						</Col>
					</Row>
				</Modal.Body>

				<Modal.Footer>
					<Row className='d-flex justify-content-center'>
						<Col xs={6}>
							<Button className='form__btn' type='submit'>
								SEND
							</Button>
						</Col>
						<Col xs={6}>
							<Button className='form__btn ' onClick={modalClose}>
								CLOSE
							</Button>
						</Col>
					</Row>
				</Modal.Footer>
			</Form>
		</Modal>
	);
}

EnquiryModal.propTypes = {
	hotel: PropTypes.string.isRequired,
	checkinDate: PropTypes.string,
	checkoutDate: PropTypes.string,
	show: PropTypes.bool,
	modalClose: PropTypes.func,
	onSubmit: PropTypes.func,
};

export default EnquiryModal;
