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
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

function HotelItem({ image, name, info }) {
	return (
		<>
			<Row>
				<Col md={7}>
					<Paper elevation={2}>
						<h1>{name}</h1>
						<Image src={image} className='image' />
						<p>{info} </p>
					</Paper>
					<Row>
						<Col md={6}>
							<Paper elevation={2}>
								<h2>Book it</h2>
							</Paper>
						</Col>
					</Row>
				</Col>

				<Col md={5}>
					<Paper elevation={2}>
						<List>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<ImageIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Photos' secondary='Jan 9, 2014' />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<WorkIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Work' secondary='Jan 7, 2014' />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<BeachAccessIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Vacation' secondary='July 20, 2014' />
							</ListItem>
						</List>
					</Paper>
				</Col>
			</Row>
		</>
	);
}

export default HotelItem;
