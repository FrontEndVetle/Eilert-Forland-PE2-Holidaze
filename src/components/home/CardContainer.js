import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import HomeData from '../../data/Homepage.json';
import HomeInfoCards from './HomeInfoCards';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

function CardContainer() {
	return (
		<Container>
			<Row className='justify-content-between'>
				{HomeData.map((HomeDetail) => {
					const { id, title, image } = HomeDetail;
					const infoList = HomeDetail.information.map((info) => (
						<>
							<ListItem key={info}>
								<ListItemAvatar>
									<Avatar>
										<BeachAccessIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={info} />
							</ListItem>
							<Divider variant='inset' component='li' />
						</>
					));

					return (
						<Col sm={6} md={4} md={3} key={id}>
							<HomeInfoCards title={title} infoList={infoList} image={image} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CardContainer;
