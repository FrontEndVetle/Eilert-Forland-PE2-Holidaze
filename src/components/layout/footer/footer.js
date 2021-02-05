import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import FolderIcon from '@material-ui/icons/Folder';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
	return (
		<footer className='footer'>
			<Container maxWidth={false} disableGutters={true}>
				<Grid
					container
					direction='row'
					justify='space-around'
					alignItems='flex-start'>
					<Grid xs={12} md={3} item>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'>
							<h5 className='footer__title'>Holidaze</h5>

							<p>
								Holidaze assists tourists in providing traditional and
								untraditional accommodation in and around Bergen.{' '}
							</p>
						</Grid>
					</Grid>
					<Grid xs={12} md={3} item>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'>
							<h5 className='footer__title'>Links</h5>
							<List component='nav'>
								<NavLink to='/' exact>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<FolderIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Home' />
									</ListItem>
								</NavLink>
								<NavLink to='/accommodation' exact>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<FolderIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Accommodation' />
									</ListItem>
								</NavLink>
								<NavLink to='/contact' exact>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<FolderIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Contact' />
									</ListItem>
								</NavLink>
							</List>
						</Grid>
					</Grid>
					<Grid xs={12} md={3} item>
						<Grid
							container
							direction='column'
							justify='flex-start'
							alignItems='center'>
							<h5 className='footer__title'>Social media</h5>
							<List component='nav'>
								<a href='https://www.facebook.com/'>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<FacebookIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Facebook' />
									</ListItem>
								</a>
								<a href='https://www.twitter.com/'>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<TwitterIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Twitter' />
									</ListItem>
								</a>
								<a href='https://www.instagram.com/'>
									<ListItem button>
										<ListItemAvatar>
											<Avatar>
												<InstagramIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary='Instagram' />
									</ListItem>
								</a>
							</List>
						</Grid>
					</Grid>
				</Grid>

				<div>
					<Container maxWidth={false} className='footer__c'>
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
