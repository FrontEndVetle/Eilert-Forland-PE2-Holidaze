import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';

const schema = yup.object().shape({
	username: yup
		.string()
		.required('Please write your username')
		.min(3, 'username have minimum 3 letters'),

	password: yup
		.string()
		.required('Please write your password')
		.min(3, 'password have minimum 3 letters'),
});

function Register() {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});
	const { registerAdmin, registerUser } = useContext(AuthContext);

	const history = useHistory();

	function onSubmit(data) {
		console.log('data', data);
		if (data.username === 'Admin' && data.password === 'Admin') {
			registerAdmin(data.username);
			history.push('/admin');
		} else {
			console.log('logged in as' + data.username);
			registerUser(data.username);
			history.push('/');
		}
		Swal.fire({
			title: 'Logged in!',
			text: 'Welcome',
			icon: 'success',
			confirmButtonText: 'OK',
		});
	}

	return (
		<div className='contact'>
			<Container>
				<Row className='d-flex justify-content-center'>
					<Col className='contact__content' md={5}>
						<h1>Log in</h1>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Row>
								<Col>
									<Form.Row>
										<Form.Group as={Col} md='12' controlId='name'>
											<Form.Label>Full name</Form.Label>
											<Form.Control
												type='text'
												name='username'
												ref={register}
												isInvalid={errors.username}
												placeholder='Full name..'
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.username && <p>{errors.username.message}</p>}
											</Form.Control.Feedback>
										</Form.Group>
										<Form.Group as={Col} md='12' controlId='email'>
											<Form.Label>Email</Form.Label>
											<Form.Control
												type='password'
												name='password'
												ref={register}
												isInvalid={errors.password}
												placeholder='Enter password'
											/>
											<Form.Control.Feedback type='invalid'>
												{errors.password && <p>{errors.password.message}</p>}
											</Form.Control.Feedback>
										</Form.Group>
									</Form.Row>
								</Col>
							</Row>

							<Button className='form__btn btn btn__primary' type='submit'>
								Send
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Register;

/*<form className='form' onSubmit={handleSubmit(onSubmit)}>
	<h1> Login </h1>{' '}
	<TextField
		name='username'
		label='Username'
		placeholder='Enter your username'
		fullWidth
		margin='normal'
		required
		inputRef={register}
	/>{' '}
	<TextField
		name='password'
		label='Password'
		placeholder='Enter your password'
		fullWidth
		margin='normal'
		required
		inputRef={register}
	/>
	<Button type='submit'> Submit </Button>
</form>;*/
