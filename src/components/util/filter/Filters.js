import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
	root: {
		width: 200,
	},
});

function Filters({ maxGuests, maxPrice, handleSearch }) {
	const classes = useStyles();

	return (
		<>
			<div className={classes.root}>
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
				<p className='text-center'>Max guests</p>
			</div>
			<div className={classes.root}>
				<Slider
					defaultValue={100}
					getAriaValueText={maxPrice}
					aria-labelledby='discrete-slider-small-steps'
					step={10}
					marks
					min={40}
					max={200}
					valueLabelDisplay='on'
					onChange={(event) => handleSearch(event)}
				/>
				<p className='text-center'>Max price </p>
			</div>
		</>
	);
}

export default Filters;
