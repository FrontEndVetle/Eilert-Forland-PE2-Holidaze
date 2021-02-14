import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function LogOut() {
	const { logout } = useContext(AuthContext);
	const history = useHistory();

	function doLogout() {
		logout();
		history.push('/');
		Swal.fire({
			title: 'Logged out!',
			text: 'Hope to see you soon',
			icon: 'success',
			confirmButtonText: 'OK',
		});
	}

	return (
		<Button variant='danger' className='menu__btn ' onClick={doLogout}>
			Log out
		</Button>
	);
}

export default LogOut;
