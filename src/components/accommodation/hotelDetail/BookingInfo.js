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

function BookingInfo({ days, price, totalPrice }) {
	return (
		<>
			<Paper elevation={2}>
				<List>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<ImageIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Checkinn' secondary='Jan 9, 2014' />
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<WorkIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary='Checkout' secondary='Jan 7, 2014' />
					</ListItem>
					<Divider variant='inset' component='li' />
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<BeachAccessIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={days} secondary='July 20, 2014' />
					</ListItem>
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
				</List>
			</Paper>
		</>
	);
}

export default BookingInfo;
