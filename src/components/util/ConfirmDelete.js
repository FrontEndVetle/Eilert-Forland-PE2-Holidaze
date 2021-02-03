import React, { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import Button from '@material-ui/core/Button';
import { BASE_URL, FETCH_OPTIONS, DELETE } from '../../constants/api';
import 'react-confirm-alert/src/react-confirm-alert.css';

function ConfirmDelete({ id, deletePath }) {
	function checkDelete() {
		confirmAlert({
			title: 'Confirm deletion',
			buttons: [
				{
					label: 'yes',
					onClick: () => deleteHotel(deletePath),
				},
				{
					label: 'no',
				},
			],
		});
	}

	function deleteHotel() {
		const url = BASE_URL + deletePath + id;

		FETCH_OPTIONS.method = 'DELETE';

		fetch(url, FETCH_OPTIONS);
	}

	return <Button onClick={checkDelete}>Delete</Button>;
}

export default ConfirmDelete;
