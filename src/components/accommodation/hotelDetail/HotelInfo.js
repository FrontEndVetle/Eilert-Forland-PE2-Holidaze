import React from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa';

function HotelInfo({ image, name, info, dining }) {
	return (
		<div>
			<Image src={image} className='detail__img' />
			<h1 detail__heading>{name}</h1>
			<ListGroup variant='flush'>
				<ListGroup.Item>
					<FaHome className='icons' /> {info}
				</ListGroup.Item>
				<ListGroup.Item>
					<FaGlassMartiniAlt className='icons' /> {dining}
				</ListGroup.Item>
			</ListGroup>
		</div>
	);
}

export default HotelInfo;
