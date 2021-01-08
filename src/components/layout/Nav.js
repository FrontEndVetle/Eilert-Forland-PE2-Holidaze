import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Logout from '../auth/Logout';

function Nav() {
	const { user } = useContext(AuthContext);
	return (
		<div className='menu'>
			<NavLink to='/' exact>
				Home
			</NavLink>
			<NavLink to='/' exact>
				Accommodation
			</NavLink>
			<NavLink to='/contact' exact>
				Contact
			</NavLink>

			{user ? (
				<>
					<NavLink to='/admin'>Admin</NavLink>
					<Logout />
				</>
			) : (
				<NavLink to='/register'>Login</NavLink>
			)}
		</div>
	);
}

export default Nav;

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
