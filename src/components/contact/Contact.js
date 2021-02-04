import React from 'react';
import ContactForm from './ContactForm';
import { useHistory } from 'react-router-dom';
import { BASE_URL, FETCH_OPTIONS } from '../../constants/api';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HotelMap from '../accommodation/hotelMap/HotelMap';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function Contact() {
	const history = useHistory();
	const heading = 'Contact us';

	const pinList = [
		{
			lat: 60.397076,
			lng: 5.324383,
			name: 'Holidaze office',
			maxGuests: '',
			price: '',
		},
	];

	async function onSubmit(data) {
		console.log('data', data);

		const url = BASE_URL + 'contacts';

		FETCH_OPTIONS.method = 'POST';
		FETCH_OPTIONS.body = JSON.stringify(data);

		fetch(url, FETCH_OPTIONS)
			.then((r) => r.json())
			.then((j) => console.log(j));
	}

	return (
		<div className='contact'>
			<Container>
				<Grid container direction='row' justify='center' alignItems='center'>
					<Grid className='contact__content'>
						<Paper elevation={2}>
							<Grid
								container
								direction='row'
								justify='space-around'
								alignItems='center'>
								<Grid xs={10} md={5} item>
									<ContactForm onSubmit={onSubmit} heading={heading} />
								</Grid>
								<Divider orientation='vertical' flexItem />
								<Grid xs={12} md={5} item>
									<div className='map-specific'>
										<HotelMap pinList={pinList} mapZoom={10} />
									</div>
									<List>
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<LocationOnIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary='Bryggen 14' secondary='Address' />
										</ListItem>
										<Divider variant='inset' />

										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<EmailIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary='holidaze@vacation.no'
												secondary='Email'
											/>
										</ListItem>
										<Divider variant='inset' />
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<PhoneIphoneIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText
												primary='+47 55849390030'
												secondary='Phone number'
											/>
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Contact;
