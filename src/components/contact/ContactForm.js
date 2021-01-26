import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your first name')
		.min(2, 'First Name must have minimum 2 letters'),

	message: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters'),

	email: yup.string().required('Please write your Email').email(),
});

function ContactForm({ onSubmit }) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<h3 className='validated'>The form has been sent. Thank you</h3>
			<Form.Group>
				<Form.Label>First name</Form.Label>
				<Form.Control
					name='name'
					placeholder='Enter your first name'
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
				{errors.eMail && <p>{errors.eMail.message}</p>}
			</Form.Group>

			<Form.Group>
				<Form.Label>Send us a message</Form.Label>
				<Form.Control
					name='message'
					as='textarea'
					placeholder='Enter your message'
					rows={3}
					ref={register}
				/>
				{errors.message && <p>{errors.message.message}</p>}
			</Form.Group>

			<Button type='submit'>Submit</Button>
		</Form>
	);
}

export default ContactForm;
