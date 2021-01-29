import React from 'react';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

function Filters({ maxGuests, maxPrice, handleSearch }) {
	return (
		<>
			<Grid item={true} xs={5}>
				<Slider
					defaultValue={5}
					getAriaValueText={maxGuests}
					aria-labelledby='discrete-slider-small-steps'
					step={1}
					marks
					min={1}
					max={10}
					valueLabelDisplay='on'
					onChange={(event) => handleSearch(event)}
				/>
				<p className='text-center'>Guests</p>
			</Grid>
			<Grid item={true} xs={5}>
				<Slider
					defaultValue={100}
					getAriaValueText={maxPrice}
					aria-labelledby='discrete-slider-small-steps'
					step={10}
					marks
					min={40}
					max={250}
					valueLabelDisplay='on'
					onChange={(event) => handleSearch(event)}
				/>
				<p className='text-center'>Max price </p>
			</Grid>
		</>
	);
}

export default Filters;
