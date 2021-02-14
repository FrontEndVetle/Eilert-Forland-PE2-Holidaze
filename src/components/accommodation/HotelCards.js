import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEuroSign, FaBed } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import InfoIcon from '../ui/InfoIcon';

function HotelCards({ name, id, image, price, maxGuests, linkPath, btnText }) {
	return (
		<>
			<Card className='card-list'>
				<Row className='d-flex justify-content-between'>
					<Col xs={12} sm={12} lg={4}>
						<Card.Img
							variant='top'
							className='card-list__img'
							src={image}
							alt='Accommodation image'
						/>
					</Col>
					<Col xs={12} lg={8}>
						<Row className='d-flex justify-content-center'>
							<NavLink to={linkPath + id}>
								<Card.Body className='m-0 p-0'>
									<Col lg={6} className='float-lg-left mb-5'>
										<Card.Title>
											<h4 className='card-list__hotel'> {name}</h4>
										</Card.Title>
									</Col>
									<Col lg={6} className='float-lg-right'>
										<ListGroup className='card-list__text ' variant='flush'>
											<ListGroup.Item className='card-list__text '>
												<InfoIcon
													small='Price from'
													info={'€' + price}
													icon={<FaEuroSign />}
												/>
											</ListGroup.Item>
											<ListGroup.Item className='card-list__text '>
												<InfoIcon
													small='Guest capacity'
													info={maxGuests}
													icon={<FaBed />}
												/>
											</ListGroup.Item>
										</ListGroup>
									</Col>
									<Col>
										<Button
											variant='outline-primary'
											className='mt-0 card-list__btn '>
											{btnText}
										</Button>
									</Col>
								</Card.Body>
							</NavLink>
						</Row>
					</Col>
				</Row>
			</Card>
		</>
	);
}
HotelCards.propTypes = {
	image: PropTypes.string,
	id: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	maxGuests: PropTypes.number.isRequired,
	btnText: PropTypes.string.isRequired,
	linkPath: PropTypes.string.isRequired,
};

export default HotelCards;
