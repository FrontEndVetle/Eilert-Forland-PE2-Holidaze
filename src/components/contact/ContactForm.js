import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function ContactForm({ onSubmit, heading }) {
	const { register, handleSubmit } = useForm({});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>{heading}</h1>
			<Grid>
				<TextField
					name='name'
					label='Full Name'
					placeholder='Name'
					fullWidth
					margin='normal'
					required
					inputRef={register}
				/>

				<TextField
					name='email'
					label='Email'
					placeholder='Enter your Email'
					inputRef={register}
					required
					fullWidth
					margin='normal'
				/>

				<TextField
					name='message'
					as='textarea'
					required
					label='Message'
					placeholder='Enter your message'
					rows={3}
					inputRef={register}
					fullWidth
					margin='normal'
					multiline
					rowsMax={4}
					variant='outlined'
				/>

				<Button type='submit'>Submit</Button>
			</Grid>
		</form>
	);
}

export default ContactForm;
