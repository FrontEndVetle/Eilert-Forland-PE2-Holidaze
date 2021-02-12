import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Logout from '../../auth/Logout';
import Logo from './logo.png';

function Navigation() {
	const { admin, user } = useContext(AuthContext);

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			variant='dark'
			className='nav fixed-top'>
			<Navbar.Brand href='/'>
				<img className='logo' src={Logo} alt='Logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>HOME</Nav.Link>
					<Nav.Link href='/accommodation'>ACCOMMODATION</Nav.Link>
					<Nav.Link href='/contact'>CONTACT</Nav.Link>
				</Nav>
				<Nav>
					{admin ? (
						<>
							<NavDropdown
								title={'Hello ' + 'Admin'}
								id='collasible-nav-dropdown'>
								<NavDropdown.Item href='/admin'>
									Admin dashboard
								</NavDropdown.Item>
								<NavDropdown.Item href='/admin/hotels/add'>
									Add establishment
								</NavDropdown.Item>
								<NavDropdown.Item href='/admin/enquiries'>
									Enquiries
								</NavDropdown.Item>
								<NavDropdown.Item href='/admin/messages'>
									Contact messages
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Logout />
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link disabled>
								<i className='fa fa-user-circle fa-2x'></i>
							</Nav.Link>
						</>
					) : user ? (
						<>
							<NavDropdown
								title={'Hello, ' + user}
								id='collasible-nav-dropdown'>
								<NavDropdown.Item href='#action/3.4'>
									<Logout />
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link disabled>
								<i className='fa fa-user-circle fa-2x'></i>
							</Nav.Link>
						</>
					) : (
						<Nav.Link href='/register'>Login</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
export default Navigation;
