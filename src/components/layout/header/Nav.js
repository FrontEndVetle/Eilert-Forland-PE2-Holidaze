import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from '../../auth/Logout';
import Logo from './logo.png';

function NavBar() {
	const { user } = useContext(AuthContext);
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<NavLink to='/' exact>
				<Navbar.Brand>
					<img className='logo' src={Logo} alt='Logo' />
				</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<NavLink to='/' exact>
						Home
					</NavLink>
					<NavLink to='/accommodation' exact>
						Accommodation
					</NavLink>
					<NavLink to='/contact' exact>
						Contact
					</NavLink>
				</Nav>

				{user ? (
					<>
						<NavLink to='/admin'>Admin</NavLink>
						<Logout />
					</>
				) : (
					<NavLink to='/register'>Login</NavLink>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;

/*<Navbar bg='dark' variant='dark' expand='lg'>
				<NavLink to='/' exact>
					<Navbar.Brand>Games</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<NavLink to='/' exact className='nav-link'>
							Home
						</NavLink>
						<NavLink to='/register' exact className='nav-link'>
							Login
						</NavLink>
					</Nav>
				</Navbar.Collapse>*/
