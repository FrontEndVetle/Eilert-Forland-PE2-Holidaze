import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BASE_URL, headers, DELETE } from '../../constants/api';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function ConfirmDelete({ id, deletePath }) {
	const history = useHistory();

	function checkDelete() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteHotel();
				Swal.fire('Deleted!', 'removed successfully', 'success');
			}
		});
	}

	async function deleteHotel() {
		const url = BASE_URL + deletePath + id;
		const options = { headers, method: DELETE };

		await fetch(url, options);

		history.push('/admin');
	}

	return <Button onClick={checkDelete}>Delete</Button>;
}

export default ConfirmDelete;
