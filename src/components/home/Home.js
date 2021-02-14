import React from 'react';
import MetaTags from 'react-meta-tags';

import { Container, Row, Col } from 'react-bootstrap';
import CardContainer from './HomeCardContainer';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
	return (
		<>
			<MetaTags>
				<title>Holidaze homepage</title>
				<meta
					name='description'
					content='welcome to holidaze booking homepage. Holidaze is a booking agency in Bergen'
				/>
			</MetaTags>
			<Container fluid className='home-banner'>
				<Row className='d-flex justify-content-center'>
					<Col xs={12} sm={7} lg={4} className='home-banner__content'>
						<div>
							<h1 className='home-banner__title'>Holidaze</h1>
							<NavLink to='/accommodation'>
								<small className='home-banner__text'>
									CABINS ┃ GUESTHOUSES ┃ HOTELS
								</small>
							</NavLink>
							<div>
								<NavLink to='/accommodation'>
									<Button variant='outline-light' className='home-banner__btn '>
										ACCOMMODATIONS
									</Button>
								</NavLink>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Container fluid className='body-light p-0'>
				<div>
					<Row className='d-flex justify-content-center'>
						<Col xs={10} md={10}>
							<blockquote className='blockquote text-center '>
								<hr className='blockquote__hr' />
								“Holidaze is the go-to booking agency for Bergen”
								<footer className='blockquote-footer'>
									Karl Hansen,
									<cite title='Source Title'> Vestlandet News</cite>
								</footer>
								<hr className='blockquote__hr' />
							</blockquote>
						</Col>
					</Row>
				</div>
				<Container fluid className='body-dark p-1'>
					<CardContainer />
				</Container>
			</Container>
		</>
	);
}

export default Home;
