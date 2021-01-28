import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Divider from '@material-ui/core/Divider';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your name')
		.min(2, 'First Name must have minimum 2 letters'),

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
		<>
			<Modal show={show} onHide={modalClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>Send us an enquiry</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Row className='justify-content-between filters'>
							<Col sm={5}>
								<Form.Group>
									<Form.Label>Accommodation</Form.Label>
									<Form.Control
										name='establishmentId'
										ref={register}
										defaultValue={hotel}
										readOnly
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Name</Form.Label>
									<Form.Control
										name='name'
										placeholder='Please enter your name'
										ref={register}
										type='valid'
									/>
									{errors.name && <p>{errors.name.message}</p>}
								</Form.Group>

								<Form.Group>
									<Form.Label>Email</Form.Label>

									<Form.Control
										name='email'
										placeholder='Enter your Email'
										ref={register}
										type='valid'
									/>
									{errors.email && <p>{errors.email.message}</p>}
								</Form.Group>
							</Col>
							<Divider orientation='vertical' flexItem />

							<Col sm={5}>
								<Form.Group>
									<Form.Label>Checkin</Form.Label>
									<Form.Control
										name='checkIn'
										ref={register}
										defaultValue={checkinDate}
										type='date'
										readOnly
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Checkout</Form.Label>
									<Form.Control
										name='checkOut'
										ref={register}
										defaultValue={checkoutDate}
										type='date'
										readOnly
									/>
								</Form.Group>
							</Col>
						</Row>
						<Modal.Footer>
							<Button type='submit'>Submit</Button>
							<Button variant='primary' onClick={modalClose}>
								Cancel
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default EnquiryModal;
