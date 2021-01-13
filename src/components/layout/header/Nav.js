import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from '../../auth/Logout';
import Logo from './logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function NavBar() {
	const { user } = useContext(AuthContext);
	return (
		<Navbar variant='dark' expand='lg'>
			<NavLink to='/' exact>
				<Navbar.Brand>
					<img className='logo' src={Logo} alt='Logo' />
				</Navbar.Brand>
			</NavLink>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto mr-auto'>
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
						<DropdownButton
							menuAlign='right'
							title='Admin'
							id='dropdown-menu-align-right'
							className='btn'>
							<Dropdown.Item href='/admin'>Dashboard</Dropdown.Item>
							<Dropdown.Item href='/admin/hotels/add'>
								Add new establishment
							</Dropdown.Item>
							<Dropdown.Item href='/admin/hotels'>Establishments</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item>
								<Logout />
							</Dropdown.Item>
						</DropdownButton>
					</>
				) : (
					<NavLink className='ml-auto' to='/register'>
						Login
					</NavLink>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavBar;
