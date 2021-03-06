import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

//icons

function Footer() {
	return (
		<footer className='footer'>
			<Container fluid>
				<Row className='d-flex justify-content-around'>
					<Col xs={8} md={3}>
						<h5 className='footer__title'>Holidaze</h5>
						<hr className='footer__hr' />
						<p>
							Holidaze assists tourists in providing traditional and
							untraditional accommodation in and around Bergen.{' '}
						</p>
					</Col>
					<Col md={3}>
						<h5 className='footer__title'>Links</h5>
						<hr className='footer__hr' />
						<ul className='footer__list'>
							<NavLink to='/'>
								<li>Home</li>
							</NavLink>
							<NavLink to='/accommodation'>
								<li>Acommodation</li>
							</NavLink>
							<NavLink to='contact'>
								<li>Contact</li>
							</NavLink>
						</ul>
					</Col>
					<Col md={3}>
						<h5 className='footer__title'>Social media</h5>
						<hr className='footer__hr' />

						<ul className='footer__list'>
							<a href='https://www.facebook.com/'>
								<li>
									<FaFacebookF /> {''}Facebook
								</li>
							</a>
							<a href='https://www.twitter.com/'>
								<li>
									<FaTwitter /> {''}
									Twitter
								</li>
							</a>
							<a href='https://www.instagram.com/'>
								<li>
									<FaInstagram /> {''}
									Instagram
								</li>
							</a>
						</ul>
					</Col>
				</Row>

				<div>
					<Container fluid className='footer__c'>
						<small>
							&copy; {new Date().getFullYear()} Copyright:
							<a href='https://github.com/FrontEndVetle'>
								Eilert Vetle Førland
							</a>
						</small>
					</Container>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
