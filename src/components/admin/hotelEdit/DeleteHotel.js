import React from 'react';
import { useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import Button from 'react-bootstrap/Button';
import { BASE_URL, FETCH_OPTIONS, DELETE } from '../../../constants/api';
import 'react-confirm-alert/src/react-confirm-alert.css';

function DeleteHotel(props) {
	const history = useHistory();

	function checkDelete() {
		confirmAlert({
			title: 'Confirm deletion',
			buttons: [
				{
					label: 'yes',
					onClick: () => deleteHotel(),
				},
				{
					label: 'no',
				},
			],
		});
	}

	async function deleteHotel() {
		const url = BASE_URL + 'establishments/' + props.id;
		FETCH_OPTIONS.method = 'DELETE';

		fetch(url, FETCH_OPTIONS);
		history.push('/admin/hotels');
	}

	return (
		<Button variant='danger' onClick={checkDelete}>
			Delete{' '}
		</Button>
	);
}

export default DeleteHotel;
