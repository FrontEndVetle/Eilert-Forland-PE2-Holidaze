import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EuroIcon from '@material-ui/icons/Euro';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

type Props = {
	name: string;
	info: string;
	link: string;
};

function DashboardCards({ link, name, info }: Props) {
	return (
		<>
			<Grid item xs={12} sm={6} md={3}>
				<Card className='card'>
					<Paper elevation={2}>
						<CardMedia
							className='card__img'
							component='img'
							title='Accommodation image'
						/>
						<CardContent>
							<h2 className='card__title'> {name}</h2>
							<List>
								<NavLink to={link}>
									<Button className='card__btn btn'>Enter</Button>
								</NavLink>
							</List>
						</CardContent>
					</Paper>
				</Card>
			</Grid>
		</>
	);
}

export default DashboardCards;
