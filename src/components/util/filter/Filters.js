import React from 'react';
import Slider from '@material-ui/core/Slider';
import Col from 'react-bootstrap/Col';

function Filters({ maxGuests, maxPrice, handleSearch }) {
	return (
		<>
			<Col>
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
			</Col>
			<Col>
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
			</Col>
		</>
	);
}

export default Filters;
