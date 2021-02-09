import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardContainer from './HomeCardContainer';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Home() {
	return (
		<>
			<Container fluid className='home-banner'>
				<Row className='d-flex justify-content-center'>
					<Col xs={11} sm={8} className='home-banner__content'>
						<h1 className='home-banner__title'>Holidaze</h1>
						<p className='home-banner__text'>CABINS ┃ GUESTHOUSES ┃ HOTELS</p>
						<div>
							<NavLink to='/accommodation'>
								<Button className='home-banner__btn btn'>accommodations</Button>
							</NavLink>
						</div>
					</Col>
				</Row>
			</Container>
			<Container className='home-info'>
				<Row className='d-flex justify-content-center'>
					<Col xs={10} md={10}>
						<p className='home-info__text'>
							Holidaze assists tourists in providing traditional and
							untraditional accommodation in and around Bergen. We connect local
							owners of quality accommodations with adventurous travelers.
						</p>
					</Col>
				</Row>
			</Container>
			<CardContainer />
		</>
	);
}

export default Home;
