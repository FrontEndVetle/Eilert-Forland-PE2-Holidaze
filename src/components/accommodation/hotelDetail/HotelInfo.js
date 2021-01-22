import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';

function HotelInfo({ image, name, info, dining }) {
	return (
		<Paper elevation={2}>
			<h1>{name}</h1>
			<List>
				<Image src={image} className='image' />

				<Divider className='mt-3' variant='inset' component='li' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<InfoIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={info} secondary='Jan 7, 2014' />
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<FastfoodIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary={dining} secondary='Jan 7, 2014' />
				</ListItem>
			</List>
		</Paper>
	);
}

export default HotelInfo;
