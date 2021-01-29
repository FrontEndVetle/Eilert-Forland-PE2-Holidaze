import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EuroIcon from '@material-ui/icons/Euro';
import HotelIcon from '@material-ui/icons/Hotel';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

function HotelCards({ name, id, image, price, maxGuests }) {
	return (
		<>
			<Grid xs={12} md={4} item>
				<Paper elevation={2}>
					<Card className='card'>
						<CardMedia
							className='card__img'
							component='img'
							image={image}
							title='Accommodation image'
						/>
						<CardContent>
							<h2 className='card__title'> {name}</h2>
							<List>
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<EuroIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={price} secondary='prices from' />
								</ListItem>
								<Divider variant='inset' component='li' />
								<ListItem>
									<ListItemAvatar>
										<Avatar>
											<HotelIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText
										className='card__text'
										primary={maxGuests}
										secondary='Maximum Guests'
									/>
								</ListItem>
								<Link to={'hotel/' + id}>
									<Button className='card__btn btn'>View</Button>
								</Link>
							</List>
						</CardContent>
					</Card>
				</Paper>
			</Grid>
		</>
	);
}
HotelCards.propTypes = {
	image: PropTypes.string,
};

export default HotelCards;
