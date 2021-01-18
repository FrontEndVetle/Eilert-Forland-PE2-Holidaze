import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Search({ searchName, hotels }) {
	const options = hotels.map((option) => {
		const firstLetter = option.name[0].toUpperCase();
		return {
			firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
			...option,
		};
	});

	return (
		<Autocomplete
			id='grouped-demo'
			options={options.sort(
				(a, b) => -b.firstLetter.localeCompare(a.firstLetter)
			)}
			groupBy={(option) => option.firstLetter}
			getOptionLabel={(option) => option.name}
			renderInput={(params) => (
				<TextField
					{...params}
					label='With categories'
					variant='outlined'
					onChange={(event) => searchName(event)}
				/>
			)}
		/>
	);
}
