import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthContext';

function Register() {
	const { register, handleSubmit } = useForm();
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
		}

		history.push('/admin');
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<h1> Login </h1>
			<Form.Group>
				<Form.Label> Name </Form.Label>
				<Form.Control
					name='username'
					placeholder='Enter your username'
					ref={register}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Password</Form.Label>
				<Form.Control
					name='password'
					placeholder='Enter your password'
					ref={register}
				/>
			</Form.Group>
			<Button type='submit'> Submit </Button>
		</Form>
	);
}

export default Register;
