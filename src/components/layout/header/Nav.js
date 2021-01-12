import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logout from '../../auth/Logout';
import Logo from './logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
						<NavDropdown title='Admin' id='nav-dropdown'>
							<NavDropdown.Item eventKey='4.1'>
								<NavLink to='/admin' exact>
									Dashboard
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item eventKey='4.2'>
								{' '}
								<NavLink to='/admin/hotels/add' exact>
									Add Establishment
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Item eventKey='4.3'>
								<NavLink to='/admin/hotels' exact>
									Establishments
								</NavLink>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item eventKey='4.4'>
								<Logout />
							</NavDropdown.Item>
						</NavDropdown>
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
