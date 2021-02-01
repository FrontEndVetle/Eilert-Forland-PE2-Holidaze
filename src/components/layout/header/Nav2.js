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

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},

	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},

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
					<ListItem>
						<ListItemText primary='Accommodation' />
					</ListItem>
				</NavLink>
				<NavLink to='/contact' exact>
					<ListItem>
						<ListItemText primary='Contact' />
					</ListItem>
				</NavLink>
			</List>
			<Divider />
			<List>
				{user ? (
					<>
						<NavLink to='/admin' exact>
							<ListItem>
								<ListItemText primary='Admin dashboard' />
							</ListItem>
						</NavLink>
						<NavLink to='/admin/hotels/add' exact>
							<ListItem>
								<ListItemText primary='Add establishment' />
							</ListItem>
						</NavLink>
						<NavLink to='/admin/hotels/' exact>
							<ListItem>
								<ListItemText primary='Establishments' />
							</ListItem>
						</NavLink>
						<ListItem>
							<Logout />
						</ListItem>
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
						<MenuItem>Add establishment</MenuItem>
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
				<Toolbar>
					<Typography className={classes.title} variant='h6' noWrap>
						Material-UI
					</Typography>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<NavLink to='/accommodation' exact>
							<Tab label='Accommodation' />
						</NavLink>
						<NavLink to='/contact' exact>
							<Tab label='Contact' />
						</NavLink>

						<IconButton
							edge='end'
							aria-label='account of current user'
							aria-controls={menuId}
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'>
							<AccountCircle />
						</IconButton>
					</div>

					<Hidden mdUp implementation='css'>
						{['left'].map((anchor) => (
							<React.Fragment key={anchor}>
								<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
								<Drawer
									anchor={anchor}
									open={state[anchor]}
									onClose={toggleDrawer(anchor, false)}>
									{list(anchor)}
								</Drawer>
							</React.Fragment>
						))}
					</Hidden>
				</Toolbar>
			</AppBar>
			{renderMenu}
		</div>
	);
}
