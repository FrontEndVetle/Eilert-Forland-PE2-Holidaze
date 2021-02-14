import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Row, Form, Button } from 'react-bootstrap/';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required('Please fill out the field'),
	address: yup.string().required('Please fill out the field'),
	image: yup.string().required('Please fill out the field'),
	lat: yup.number().typeError('Please provide a number value'),

	lng: yup.number().typeError('Please provide a number value'),

	maxGuests: yup
		.number()
		.typeError('Please provide a number value')
		.required('Please fill out this field.'),
	price: yup
		.number()
		.typeError('Please provide a number value')
		.required('Please fill out this field.'),
	email: yup.string().required('Please write your Email').email(),
	description: yup
		.string()
		.required('Please enter your message')
		.min(10, 'Message must be atleast 10 characters')
		.max(200, 'Message can not be longer then 200 characters'),
});

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
	btnName,
	btnVar,
	setCatering,
	catering,
}) {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const radios = [
		{ name: 'catering', value: 'false' },
		{ name: 'Self-Catering', value: 'true' },
	];

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Row className='d-flex justify-content-around'>
				<Col md={5}>
					<Form.Row>
						<Form.Group as={Col} md='10' controlId='name'>
							<Form.Label>Accommodation name</Form.Label>
							<Form.Control
								defaultValue={name}
								type='text'
								name='name'
								ref={register}
								isInvalid={errors.name}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.name && <p>{errors.name.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								defaultValue={email}
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
						<Form.Group as={Col} md='10' controlId='maxGuest'>
							<Form.Label>Guest Capacity</Form.Label>
							<Form.Control
								defaultValue={maxGuests}
								type='number'
								name='maxGuests'
								ref={register}
								isInvalid={errors.maxGuests}
								placeholder='Maximum guest capacity..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.maxGuests && <p>{errors.maxGuests.message}</p>}
							</Form.Control.Feedback>

							<ButtonGroup toggle className='m-4'>
								{radios.map((radio, idx) => (
									<ToggleButton
										key={idx}
										type='radio'
										variant='outline-primary'
										name='radio'
										value={radio.value}
										checked={catering === radio.value}
										onChange={(e) => setCatering(e.currentTarget.value)}>
										{radio.name}
									</ToggleButton>
								))}
							</ButtonGroup>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='description'>
							<Form.Label>Send us a message</Form.Label>
							<Form.Control
								defaultValue={description}
								name='description'
								as='textarea'
								placeholder='Description..'
								rows={3}
								ref={register}
								isInvalid={errors.description}
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.description && <p>{errors.description.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
				</Col>
				<div className='border-right d-none d-md-block d-lg-block'></div>
				<Col md={5}>
					<Form.Row>
						<Form.Group as={Col} md='10' controlId='image'>
							<Form.Label>image</Form.Label>
							<Form.Control
								defaultValue={image}
								type='text'
								name='image'
								ref={register}
								isInvalid={errors.image}
								placeholder='image URL'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.image && <p>{errors.image.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='price'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								defaultValue={price}
								type='number'
								name='price'
								ref={register}
								isInvalid={errors.price}
								placeholder='price pr night..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.price && <p>{errors.price.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='address'>
							<Form.Label>Address</Form.Label>
							<Form.Control
								defaultValue={address}
								type='text'
								name='address'
								ref={register}
								isInvalid={errors.address}
								placeholder='Street name..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.address && <p>{errors.address.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='lat'>
							<Form.Label>Latitude</Form.Label>
							<Form.Control
								defaultValue={lat}
								type='text'
								name='lat'
								ref={register}
								isInvalid={errors.lat}
								placeholder='Enter latitude..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.lat && <p>{errors.lat.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group as={Col} md='10' controlId='lng'>
							<Form.Label>Longitude</Form.Label>
							<Form.Control
								defaultValue={lng}
								type='text'
								name='lng'
								ref={register}
								isInvalid={errors.lng}
								placeholder='Enter longitude..'
							/>
							<Form.Control.Feedback type='invalid'>
								{errors.lng && <p>{errors.lng.message}</p>}
							</Form.Control.Feedback>
						</Form.Group>
					</Form.Row>
				</Col>
			</Row>
			<Row className='d-flex justify-content-center'>
				<Col xs={8} md={4}>
					<Button className='form__btn btn btn__primary' type='submit'>
						{btnName}
					</Button>
				</Col>
				<Col xs={8} md={4}>
					{btnVar}
				</Col>
			</Row>
		</Form>
	);
}

EditHotelForm.propTypes = {
	name: PropTypes.string,
	catering: PropTypes.string,
	email: PropTypes.string,
	image: PropTypes.string,
	price: PropTypes.number,
	maxGuests: PropTypes.number,
	lat: PropTypes.number,
	lng: PropTypes.number,
	description: PropTypes.string,
	address: PropTypes.string,
	id: PropTypes.string,
	btnName: PropTypes.string,
	btnVar: PropTypes.object,
	selfCatering: PropTypes.bool,
};

export default EditHotelForm;
