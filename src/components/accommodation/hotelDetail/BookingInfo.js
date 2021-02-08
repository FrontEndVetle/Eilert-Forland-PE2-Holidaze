import React from 'react';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

function BookingInfo({
	days,
	price,
	totalPrice,
	guests,
	checkinDate,
	checkoutDate,
}) {
	return (
		<>
			<List>
				<h3 className='text-center'>Booking information</h3>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Checkinn' secondary={checkinDate} />
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<WorkIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Checkout' secondary={checkoutDate} />
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<BeachAccessIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={days + ' Nights'} />
				</ListItem>
				<Divider variant='inset' component='li' />

				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<BeachAccessIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={'€' + totalPrice + ' Total'}
						secondary={'€' + price + ' per person per night'}
					/>
				</ListItem>
				<Divider variant='inset' component='li' />

				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<BeachAccessIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={guests + ' Guests'} />
				</ListItem>
			</List>
		</>
	);
}

export default BookingInfo;
