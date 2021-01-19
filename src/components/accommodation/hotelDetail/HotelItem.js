import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HotelItem({ image, name }) {
	return (
		<>
			<Col md={6}>
				<Image src={image} />
			</Col>
			<Col>
				<h1>{name}</h1>
			</Col>
		</>
	);
}

export default HotelItem;
