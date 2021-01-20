import React from 'react';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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

function HotelCards({ name, id, image, price, maxGuests }) {
	return (
		<Col sm={12} md={6} lg={4} key={id}>
			<Paper elevation={2}>
				<Card>
					<Card.Img className='card__img' variant='top' src={image} />
					<Card.Body className='d-flex flex-column card__body'>
						<Card.Title className='card__title card__title--special'>
							{name}
						</Card.Title>
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
								<ListItemText primary={maxGuests} secondary='Maximum Guests' />
							</ListItem>
							<Link to={'hotel/' + id}>
								<Button className='card__btn btn' variant='secondary' block>
									View
								</Button>
							</Link>
						</List>
					</Card.Body>
				</Card>
			</Paper>
		</Col>
	);
}

export default HotelCards;
