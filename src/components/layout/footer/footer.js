import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
	return (
		<footer className='footer pt-4 mt-4'>
			<Container-fluid>
				<Row className='text-center text-md-left d-flex justify-content-around'>
					<Col md='3'>
						<h5 className='footer__title'>Holidaze</h5>
						<p>
							Here you can use rows and columns here to organize your footer
							content.
						</p>
					</Col>
					<Col md='2'>
						<h5 className='footer__title'>Links</h5>
						<ul>
							<li>
								<a href='#!'>Link 1</a>
							</li>
							<li>
								<a href='#!'>Link 2</a>
							</li>
							<li>
								<a href='#!'>Link 3</a>
							</li>
							<li>
								<a href='#!'>Link 4</a>
							</li>
						</ul>
					</Col>
					<Col md='2'>
						<h5 className='footer__title'>Links</h5>
						<ul>
							<li>
								<a href='#!'>Link 1</a>
							</li>
							<li>
								<a href='#!'>Link 2</a>
							</li>
							<li>
								<a href='#!'>Link 3</a>
							</li>
							<li>
								<a href='#!'>Link 4</a>
							</li>
						</ul>
					</Col>
				</Row>

				<div className='text-center py-3'>
					<Container fluid>
						&copy; {new Date().getFullYear()} Copyright:{' '}
						<a href='https://github.com/FrontEndVetle'>
							{' '}
							Eilert Vetle Førland{' '}
						</a>
					</Container>
				</div>
			</Container-fluid>
		</footer>
	);
}

export default Footer;
