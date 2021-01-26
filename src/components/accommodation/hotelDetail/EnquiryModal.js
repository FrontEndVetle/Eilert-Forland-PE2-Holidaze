import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your name')
		.min(2, 'First Name must have minimum 2 letters'),

	email: yup.string().required('Please write your Email').email(),
});

function EnquiryModal({ modalClose, show, onSubmit }) {
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
						<h3 className='validated'>The form has been sent. Thank you</h3>
						<Form.Group>
							<Form.Label>First name</Form.Label>
							<Form.Control
								name='name'
								placeholder='Please enter your name'
								ref={register}
							/>
							{errors.name && <p>{errors.name.message}</p>}
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								name='email'
								placeholder='Enter your Email'
								ref={register}
							/>
							{errors.email && <p>{errors.email.message}</p>}
						</Form.Group>
						<Form.Group>
							<Form.Label>checkin</Form.Label>
							<Form.Control name='checkIn' ref={register} />
						</Form.Group>
						<Form.Group>
							<Form.Label>checkout</Form.Label>
							<Form.Control name='checkOut' ref={register} />
						</Form.Group>
						<Form.Group>
							<Form.Label>establishmentId</Form.Label>
							<Form.Control name='establishmentId' ref={register} />
						</Form.Group>

						<Button type='submit'>Submit</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={modalClose}>
						Send
					</Button>
					<Button variant='primary' onClick={modalClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EnquiryModal;
