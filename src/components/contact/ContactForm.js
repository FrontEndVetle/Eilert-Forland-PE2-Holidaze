import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Row, Col } from 'react-bootstrap';

const schema = yup.object().shape({
	name: yup
		.string()
		.required('Please write your full name')
		.min(3, 'name must have minimum 3 letters'),

	email: yup.string().required('Please write your Email').email(),

	message: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters')
		.max(100, 'Message can not be longer then 100 characters'),
});

function ContactForm({ onSubmit, heading }) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<Form noValidate onSubmit={handleSubmit(onSubmit)}>
			<h1>{heading}</h1>

			<Row>
				<Col>
					<Form.Row>
						<Form.Group as={Col} md='12' controlId='name'>
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
						<Form.Group as={Col} md='12' controlId='email'>
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
						<Form.Group as={Col} md='12' controlId='message'>
							<Form.Label>Send us a message</Form.Label>
							<Form.Control
								name='message'
								as='textarea'
								placeholder='Enter your message'
								rows={3}
								ref={register}
								isInvalid={errors.message}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.message && <p>{errors.message.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
				</Col>
			</Row>

			<Button className='form__btn btn btn__primary' type='submit'>
				Send
			</Button>
		</Form>
	);
}

export default ContactForm;
