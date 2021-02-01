import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

function Footer() {
	return (
		<footer className='footer'>
			<Container maxWidth disableGutters='true'>
				<Grid
					container
					direction='row'
					justify='space-around'
					alignItems='center'>
					<Grid md={2}>
						<h5 className='footer__title'>Holidaze</h5>
						<p>
							Here you can use rows and columns here to organize your footer
							content.
						</p>
					</Grid>
					<Grid md={2}>
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
					</Grid>
					<Grid md={2}>
						<h5 className='footer__title'>Links</h5>
						<ul>
							<li>
								<a href='#!'>
									<i className='material-icons'>Facebook</i>Link 1
								</a>
							</li>
							<li>
								<a href='#!'>
									<i className='material-icons'>hotel</i>Link 2
								</a>
							</li>
							<li>
								<a href='#!'>
									<i className='material-icons'>hotel</i>Link 3
								</a>
							</li>
							<li>
								<a href='#!'>
									<i className='material-icons'>hotel</i>Link 4
								</a>
							</li>
						</ul>
					</Grid>
				</Grid>

				<div>
					<Container maxWidth className='footer__c'>
						<small>
							&copy; {new Date().getFullYear()} Copyright:{' '}
							<a href='https://github.com/FrontEndVetle'>
								{' '}
								Eilert Vetle Førland{' '}
							</a>
						</small>
					</Container>
				</div>
			</Container>
		</footer>
	);
}

export default Footer;
