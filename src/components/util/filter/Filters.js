import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

function Filters({
	filterPrice,
	filterGuests,
	setFilterGuests,
	setFilterPrice,
	handleSearch,
}) {
	return (
		<Form onChange={(event) => handleSearch(event)}>
			<Form.Group as={Row}>
				<Col xs={5}>
					<Form.Label className='filter__title'>
						<p>Price €</p>
					</Form.Label>
					<RangeSlider
						value={filterPrice}
						onChange={(e) => setFilterPrice(e.target.value)}
						tooltipPlacement='top'
						tooltip='on'
						max={300}
						min={85}
					/>
				</Col>
				<Col xs={5}>
					<Form.Label className='filter__title'>
						<p>Max Guests</p>
					</Form.Label>
					<RangeSlider
						value={filterGuests}
						onChange={(e) => setFilterGuests(e.target.value)}
						tooltipPlacement='bottom'
						tooltip='on'
						max={20}
						min={1}
					/>
				</Col>
			</Form.Group>
		</Form>
	);
}

export default Filters;

/*<Slider
	defaultValue={5}
	getAriaValueText={maxGuests}
	aria-labelledby='discrete-slider-small-steps'
	step={1}
	marks
	min={1}
	max={10}
	valueLabelDisplay='on'
	onChange={(event) => handleSearch(event)}
	className='filter'
/>;

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
	className='filter'
/>;*/
