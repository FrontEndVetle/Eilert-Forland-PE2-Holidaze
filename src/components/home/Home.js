import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CardContainer from './HomeCardContainer';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home() {
	return (
		<>
			<Container maxWidth={false} className='home-banner'>
				<Grid
					container
					direction='column'
					justify='space-around'
					alignItems='center'>
					<Grid className='home-banner__content'>
						<h1 className='home-banner__title'>Holidaze</h1>
						<p className='home-banner__text'>Cabins, Hotels, Guest Houses</p>
						<div>
							<NavLink to='/accommodation'>
								<Button className='home-banner__btn btn'>accommodations</Button>
							</NavLink>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Container maxWidth={false} className='home-info'>
				<Grid container direction='column' justify='center' alignItems='center'>
					<Grid xs={10} md={4}>
						<p className='home-info__text'>
							Holidaze assists tourists in providing traditional and
							untraditional accommodation in and around Bergen. We connect local
							owners of quality accommodations with adventurous travelers.
						</p>
					</Grid>
				</Grid>
			</Container>
			<CardContainer />
		</>
	);
}

export default Home;
