import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Tab from '@material-ui/core/Tab';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Logout from '../../auth/Logout';
import Grid from '@material-ui/core/Grid';
import Logo from './logo.png';

const useStyles = makeStyles((theme) => ({
	/*sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},*/

	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
}));

export default function Nav2() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const [state, setState] = React.useState({
		left: false,
	});

	//get if user is logged in or not
	const { user } = useContext(AuthContext);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<NavLink to='/accommodation' exact>
					<MenuItem>Accommodation</MenuItem>
				</NavLink>
				<NavLink to='/contact' exact>
					<MenuItem>Contact</MenuItem>
				</NavLink>
			</List>
			<Divider />
			<List>
				{user ? (
					<>
						<NavLink to='/admin' exact>
							<MenuItem>Admin dashboard</MenuItem>
						</NavLink>
						<NavLink to='/admin/hotels/add' exact>
							<MenuItem>Add establishment</MenuItem>
						</NavLink>
						<NavLink to='/admin/hotels/' exact>
							<MenuItem>Establishments</MenuItem>
						</NavLink>
						<MenuItem>
							<Logout />
						</MenuItem>
					</>
				) : (
					<NavLink className='ml-auto' to='/register'>
						<ListItem>
							<ListItemText primary='Login' />
						</ListItem>
					</NavLink>
				)}
			</List>
		</div>
	);

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			className='nav__menu'
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			{user ? (
				<>
					<NavLink to='/admin' exact>
						<MenuItem>Admin dashboard</MenuItem>
					</NavLink>
					<NavLink to='/admin/hotels/add' exact>
						<MenuItem>Agfdgt</MenuItem>
					</NavLink>
					<NavLink to='/admin/hotels/' exact>
						<MenuItem>Establishments</MenuItem>
					</NavLink>
					<ListItem>
						<Logout />
					</ListItem>
				</>
			) : (
				<NavLink className='ml-auto' to='/register'>
					<MenuItem>Login</MenuItem>
				</NavLink>
			)}
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position='static'>
				<Toolbar className='nav'>
					<Grid
						container
						direction='row'
						justify='space-between'
						alignItems='center'>
						<Grid xs={1}>
							<NavLink to='/' exact>
								<img className='logo' src={Logo} alt='Logo' />
							</NavLink>
						</Grid>
						<Hidden smDown implementation='css'>
							<NavLink to='/accommodation' exact>
								<Tab label='Accommodation' />
							</NavLink>
							<NavLink to='/contact' exact>
								<Tab label='Contact' />
							</NavLink>
						</Hidden>
						<Hidden smDown implementation='css'>
							<IconButton
								aria-label='account of current user'
								aria-controls={menuId}
								onClick={handleProfileMenuOpen}
								color='inherit'>
								<AccountCircle />
							</IconButton>
						</Hidden>
						<Hidden mdUp implementation='css'>
							{['left'].map((anchor) => (
								<React.Fragment key={anchor}>
									<Button onClick={toggleDrawer(anchor, true)}>Meny</Button>
									<Drawer
										anchor={anchor}
										open={state[anchor]}
										onClose={toggleDrawer(anchor, false)}>
										{list(anchor)}
									</Drawer>
								</React.Fragment>
							))}
						</Hidden>
					</Grid>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</div>
	);
}
