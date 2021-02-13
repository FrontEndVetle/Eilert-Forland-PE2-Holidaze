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
					<Col xs={12} sm={12} lg={6}>
						<Card.Img
							variant='top'
							className='card-list__img'
							src={image}
							alt='Accommodation image'
						/>
					</Col>
					<Col xs={12} lg={6}>
						<NavLink to={linkPath + id}>
							<Card.Body>
								<Card.Title>
									<h4 className='card-list__title'> {name}</h4>
								</Card.Title>
								<ListGroup className='card-list__text' variant='flush'>
									<ListGroup.Item>
										<InfoIcon
											small='Price from'
											info={'€' + price}
											icon={<FaEuroSign />}
										/>
									</ListGroup.Item>
									<ListGroup.Item>
										<InfoIcon
											small='Guest capacity'
											info={maxGuests}
											icon={<FaBed />}
										/>
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</NavLink>
						<NavLink to={linkPath + id}>
							<Button variant='outline-primary' className='card-list__btn'>
								{btnText}
							</Button>
						</NavLink>
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
