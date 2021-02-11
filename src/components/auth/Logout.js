import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Button from 'react-bootstrap/Button';

function LogOut() {
	const { logout } = useContext(AuthContext);
	const history = useHistory();

	function doLogout() {
		logout();
		history.push('/');
	}

	return (
		<Button className='menu__btn btn btn__primary' onClick={doLogout}>
			Log out
		</Button>
	);
}

export default LogOut;
