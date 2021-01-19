import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';

let id;
export default function Search({ searchName, hotels }) {
	const options = hotels.map((option) => {
		const firstLetter = option.name[0].toUpperCase();
		id = option.id;

		return {
			firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
			...option,
		};
	});

	return (
		<Autocomplete
			options={options.sort(
				(a, b) => -b.firstLetter.localeCompare(a.firstLetter)
			)}
			groupBy={(option) => option.firstLetter}
			getOptionLabel={(option) => option.name}
			renderOption={(option) => (
				<Link className='search-link' to={'hotel/' + option.id}>
					<i className='material-icons'>hotel</i>
					{option.name} ${option.price}
				</Link>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					label='Search Accommodations'
					variant='outlined'
					onChange={(event) => searchName(event)}
				/>
			)}
		/>
	);
}
