import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ConfirmDelete from '../../util/ConfirmDelete';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';

function EditHotelForm({
	onSubmit,
	email,
	image,
	price,
	maxGuests,
	lat,
	lng,
	description,
	address,
	name,
}) {
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			email: 'bluebill1049@hotmail.com',
		},
	});

	console.log(name);

	return (
		<Container maxWidth='sm'>
			<Grid container direction='row' justify='center' alignItems='center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<TextField
							name='name'
							inputRef={register}
							defaultValue={name}
							InputProps={{
								readOnly: false,
							}}
							helperText='Name of accommodation'
						/>
						<TextField
							name='email'
							type='email'
							inputRef={register}
							label={email}
							required
							margin='normal'
							defaultValue={email}
						/>
					</Grid>
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
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<Input
							type='number'
							name='price'
							inputRef={register}
							defaultValue={price}
							startAdornment={
								<InputAdornment position='start'>€</InputAdornment>
							}
						/>
						<Input
							type='number'
							name='maxGuests'
							inputRef={register}
							defaultValue={maxGuests}
							startAdornment={
								<InputAdornment position='start'>Guests</InputAdornment>
							}
						/>
					</Grid>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='flex-start'>
						<Input
							type='number'
							name='lat'
							inputRef={register}
							defaultValue={lat}
							startAdornment={
								<InputAdornment position='start'>lat</InputAdornment>
							}
						/>
						<Input
							type='number'
							name='lng'
							inputRef={register}
							defaultValue={lng}
							startAdornment={
								<InputAdornment position='start'>lng</InputAdornment>
							}
						/>
					</Grid>
					<TextField
						name='description'
						as='textarea'
						placeholder={description}
						rows={3}
						inputRef={register}
						fullWidth
						margin='normal'
						multiline
						rowsMax={4}
						variant='outlined'
					/>
					<TextField
						name='address'
						label='Address'
						placeholder={address}
						inputRef={register}
						required
						fullWidth
						margin='normal'
						defaultValue={address}
					/>

					<Button type='submit'>Submit</Button>
				</form>
			</Grid>
		</Container>
	);
}

EditHotelForm.propTypes = {
	name: PropTypes.string,
	onSubmit: PropTypes.func,
	email: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	maxGuests: PropTypes.number,
	lat: PropTypes.number,
	lng: PropTypes.number,
	description: PropTypes.string,
	address: PropTypes.string,
};

export default EditHotelForm;
