import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ConfirmDelete from '../../util/ConfirmDelete';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';

function EditHotelForm({
	onSubmit,
	heading,
	id,
	name,
	email,
	deletePath,
	image,
	price,
	maxGuests,
	lat,
	lng,
	description,
	address,
	selfCatering,
}) {
	const { register, handleSubmit } = useForm({});

	return (
		<Container component='main' maxWidth='xs'>
			<Grid container direction='column' justify='center' alignItems='center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>{heading}</h1>
					<TextField
						name='name'
						label='Hotel Name'
						placeholder={name}
						fullWidth
						margin='normal'
						required
						inputRef={register}
						defaultValue={name}
					/>

					<TextField
						name='email'
						label='Email'
						placeholder={email}
						inputRef={register}
						required
						fullWidth
						margin='normal'
						defaultValue={email}
					/>
					<TextField
						name='image'
						label='Image link'
						placeholder={image}
						inputRef={register}
						required
						fullWidth
						margin='normal'
						defaultValue={image}
					/>
					<Input
						name='price'
						inputRef={register}
						defaultValue={price}
						fullWidth
						startAdornment={<InputAdornment position='start'>€</InputAdornment>}
					/>

					<Button type='submit'>Submit</Button>
					<ConfirmDelete id={id} deletePath={deletePath} />
				</form>
			</Grid>
		</Container>
	);
}

export default EditHotelForm;
