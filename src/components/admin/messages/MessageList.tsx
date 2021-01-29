import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ConfirmDelete from '../../util/ConfirmDelete';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';

type Props = {
	id: string;
	name: string;
	email: string;
	message: string;
	createdAt: number;
	checkIn: number;
	checkOut: number;
	deletePath: string;
	hotelName: string;
};

function EnquiriesList({
	id,
	name,
	email,
	message,
	createdAt,
	checkIn,
	checkOut,
	deletePath,
	hotelName,
}: Props) {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
				</Grid>
				<Grid item xs={10}>
					<Paper elevation={2}>
						<Card>
							<CardHeader
								avatar={<Avatar aria-label='recipe'>R</Avatar>}
								title={'Sent ' + createdAt}
								align='center'
							/>

							<Grid container spacing={3} justify='space-evenly'>
								<Grid item xs={5}>
									<h2>{name}</h2>
									<CardContent>
										<ListItem>
											<Typography paragraph>{message}</Typography>
										</ListItem>
										<Divider variant='inset' />
									</CardContent>
									<ListItem>E-mail: {email}</ListItem>
								</Grid>
								<Divider orientation='vertical' flexItem />
								<Grid item xs={5}>
									<h3>{hotelName}</h3>
									<Divider variant='inset' />

									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<ImageIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Checkinn' secondary={checkIn} />
									</ListItem>
									<Divider variant='inset' component='li' />

									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<WorkIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Checkout' secondary={checkOut} />
									</ListItem>
									<Divider variant='inset' component='li' />
								</Grid>
							</Grid>
							<CardActions style={{ justifyContent: 'center' }}>
								<ConfirmDelete id={id} deletePath={deletePath} />
							</CardActions>
						</Card>
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}

export default EnquiriesList;
