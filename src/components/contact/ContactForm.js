import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
}));

function ContactForm({ onSubmit, heading }) {
	const classes = useStyles();

	const { register, handleSubmit } = useForm({});

	return (
		<Container component='main' maxWidth='xs'>
			<Grid container direction='column' justify='center' alignItems='center'>
				<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
					<h1>{heading}</h1>
					<TextField
						name='name'
						label='Full Name'
						placeholder='Placeholder'
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
				</form>
			</Grid>
		</Container>
	);
}

export default ContactForm;
