import React from 'react';
import { Container, Grid } from '@material-ui/core';
import HomeData from '../../data/Homepage.json';
import HomeInfoCards from './HomeInfoCards';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Divider from '@material-ui/core/Divider';

function CardContainer() {
	return (
		<Container>
			<Grid
				container
				direction='row'
				justify='space-between'
				alignItems='flex-start'
				className='content'>
				{HomeData.map((HomeDetail) => {
					const { id, title, image } = HomeDetail;
					const infoList = HomeDetail.information.map((info, i) => (
						<div key={i}>
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<ImportContactsIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={info} />
							</ListItem>
							<Divider variant='inset' component='li' />
						</div>
					));

					return (
						<Grid xs={12} sm={5} md={4} key={id} item>
							<HomeInfoCards title={title} infoList={infoList} image={image} />{' '}
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default CardContainer;
