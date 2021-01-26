import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your first name')
		.min(2, 'First Name must have minimum 2 letters'),

	textArea: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters'),

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
								placeholder='Enter your first name'
								ref={register}
							/>
							{errors.firstName && <p>{errors.name.message}</p>}
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
							<Form.Label>Send us a message</Form.Label>
							<Form.Control
								name='textArea'
								as='textarea'
								placeholder='Enter your message'
								rows={3}
								ref={register}
							/>
							{errors.textArea && <p>{errors.textArea.message}</p>}
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
