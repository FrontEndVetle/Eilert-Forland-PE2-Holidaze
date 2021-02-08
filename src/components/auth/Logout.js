import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Button from '@material-ui/core/Button';

function LogOut() {
	const { logout } = useContext(AuthContext);
	const history = useHistory();

	function doLogout() {
		logout();
		history.push('/');
	}

	return (
		<Button className='menu__btn btn' onClick={doLogout}>
			Log out
		</Button>
	);
}

export default LogOut;
