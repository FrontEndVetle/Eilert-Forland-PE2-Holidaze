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
		<Paper elevation={2}>
			<Card>
				<CardMedia
					className='card__img'
					component='img'
					image={image}
					title='Homepage information image'
				/>
				<CardContent>
					<h2>{title}</h2>
					<List>{infoList} </List>
				</CardContent>
			</Card>
		</Paper>
	);
}

export default HomeInfoCards;
