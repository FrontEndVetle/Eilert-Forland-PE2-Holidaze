import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';

function Sliders({
	filterPrice,
	filterGuests,
	setFilterGuests,
	setFilterPrice,
	handleSearch,
}) {
	return (
		<Form onChange={(event) => handleSearch(event)}>
			<Row className='d-flex justify-content-center'>
				<Col sm={5} md={5}>
					<p className='slider__title'> Price € </p>
					<RangeSlider
						className='slider__range'
						value={filterPrice}
						onChange={(e) => setFilterPrice(e.target.value)}
						tooltipPlacement='top'
						tooltip='on'
						max={300}
						min={85}
					/>
				</Col>
				<Col sm={5} md={5}>
					<p className='slider__title'> Max Guests </p>
					<RangeSlider
						className='slider__range'
						value={filterGuests}
						onChange={(e) => setFilterGuests(e.target.value)}
						tooltipPlacement='bottom'
						tooltip='on'
						max={20}
						min={1}
					/>
				</Col>
			</Row>
		</Form>
	);
}

export default Sliders;
