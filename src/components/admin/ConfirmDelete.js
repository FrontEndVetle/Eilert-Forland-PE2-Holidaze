import React from 'react';
import Button from 'react-bootstrap/Button';
import { BASE_URL, headers, DELETE } from '../../constants/api';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function ConfirmDelete({ id, deletePath, historyPath }) {
	const history = useHistory();

	function checkDelete() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00103d',
			cancelButtonColor: '#a6082a',
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

		history.push(historyPath);
	}

	return (
		<Button
			variant='outline-danger'
			className='form__btn'
			onClick={checkDelete}>
			DELETE
		</Button>
	);
}

ConfirmDelete.propTypes = {
	id: PropTypes.string.isRequired,
	deletePath: PropTypes.string.isRequired,
	historyPath: PropTypes.string.isRequired,
};

export default ConfirmDelete;
