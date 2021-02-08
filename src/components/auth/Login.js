import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { AuthContext } from '../../context/AuthContext';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Swal from 'sweetalert2';
import { Elevation } from '../../constants/Elevation';

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
				<Grid container direction='row' justify='center' alignItems='center'>
					<Grid className='contact__content' md={5}>
						<Paper elevation={Elevation}>
							<form className='form' onSubmit={handleSubmit(onSubmit)}>
								<h1> Login </h1>
								<TextField
									name='username'
									label='Username'
									placeholder='Enter your username'
									fullWidth
									margin='normal'
									required
									inputRef={register}
								/>
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
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Register;
