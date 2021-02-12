import React from 'react';
import Card from 'react-bootstrap/Card';

type Props = {
	title: string;
	infoList: string;
	image: string;
};

function HomeInfoCards({ title, infoList, image }: Props) {
	return (
		<Card className='hotel-card'>
			<Card.Img
				variant='top'
				className='card__img'
				src={image}
				alt='Homepage information image'
			/>
			<Card.Body className='flex'>
				<Card.Title>
					<h2 className='hotel-card__title font-special'> {title}</h2>
				</Card.Title>
				{infoList}
			</Card.Body>
		</Card>
	);
}

export default HomeInfoCards;
