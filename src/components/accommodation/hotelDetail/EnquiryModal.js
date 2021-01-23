import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.required('Please write your first name')
		.min(2, 'First Name must have minimum 2 letters'),

	lastName: yup
		.string()
		.required('Please write your last name')
		.min(2, 'Last name must have minimum 2 letters'),

	textArea: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters'),

	eMail: yup.string().required('Please write your Email').email(),
});

function enquiryModal({ modalClose, show }) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log('data', data);
		let validated = document.querySelector('.validated');
		validated.style.display = 'block';
	}

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
								name='firstName'
								placeholder='Enter your first name'
								ref={register}
							/>
							{errors.firstName && <p>{errors.firstName.message}</p>}
						</Form.Group>

						<Form.Group>
							<Form.Label>Last name</Form.Label>
							<Form.Control
								name='lastName'
								placeholder='Enter your last name'
								ref={register}
							/>
							{errors.lastName && <p>{errors.lastName.message}</p>}
						</Form.Group>

						<Form.Group>
							<Form.Label>Email</Form.Label>
							<Form.Control
								name='eMail'
								placeholder='Enter your Email'
								ref={register}
							/>
							{errors.eMail && <p>{errors.eMail.message}</p>}
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

export default enquiryModal;
