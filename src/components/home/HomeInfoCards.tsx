import React from 'react';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

type Props = {
	title: string;
	infoList: string;
	image: string;
};

function HomeInfoCards({ title, infoList, image }: Props) {
	return (
		<Card className='card'>
			<Paper elevation={2}>
				<CardMedia
					className='card__img'
					component='img'
					image={image}
					title='Homepage information image'
				/>
				<CardContent>
					<h2 className='card__title'> {title}</h2>
					<List className='card__text'>{infoList} </List>
				</CardContent>
			</Paper>
		</Card>
	);
}

export default HomeInfoCards;
