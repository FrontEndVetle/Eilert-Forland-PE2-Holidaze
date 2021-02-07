import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Elevation } from '../../constants/Elevation';

type Props = {
	title: string;
	infoList: string;
	image: string;
};

function HomeInfoCards({ title, infoList, image }: Props) {
	return (
		<Card className='card' elevation={Elevation}>
			<CardMedia
				className='card__img'
				component='img'
				image={image}
				title='Homepage information image'
			/>
			<CardContent>
				<h2 className='card__title font-special'> {title}</h2>
				<List className='card__text'>{infoList} </List>
			</CardContent>
			<CardContent>
				<NavLink to='/accommodation'>
					<Button className='card__btn btn'>Accommodations</Button>
				</NavLink>
			</CardContent>
		</Card>
	);
}

export default HomeInfoCards;
