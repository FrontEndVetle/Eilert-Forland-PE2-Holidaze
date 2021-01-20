import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Paper from '@material-ui/core/Paper';
import Row from 'react-bootstrap/Row';

function HotelItem({ image, name, info }) {
	return (
		<>
			<Row>
				<Col md={7}>
					<Paper elevation={2}>
						<h1>{name}</h1>
						<Image src={image} className='image' />
						<p>{info} </p>
					</Paper>
					<Row>
						<Col md={6}>
							<Paper elevation={2}>
								<h2>Book it</h2>
							</Paper>
						</Col>
					</Row>
				</Col>

				<Col md={5}>
					<Paper elevation={2}>
						<h2>Booking info</h2>
					</Paper>
				</Col>
			</Row>
		</>
	);
}

export default HotelItem;
