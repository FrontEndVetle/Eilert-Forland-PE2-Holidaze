import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import MapStyles from './MapStyles';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const center = {
	lat: 60.397076,
	lng: 5.324383,
};

function HotelMap({ pinList, mapZoom }) {
	const [pinHotel, setPinHotel] = useState(null);

	return (
		<LoadScript googleMapsApiKey='AIzaSyCYNfjg6TYg7I_NYQdd_73-UZH8Rgk2gFU'>
			<GoogleMap
				options={{ styles: MapStyles }}
				mapContainerStyle={containerStyle}
				center={center}
				zoom={mapZoom}>
				{pinList.map((pin, i) => {
					return (
						<Marker
							key={i}
							position={pin}
							onClick={() => {
								setPinHotel(pin);
							}}
						/>
					);
				})}
				;
				{pinHotel && (
					<InfoWindow
						position={{ lat: pinHotel.lat, lng: pinHotel.lng }}
						onCloseClick={() => {
							setPinHotel(null);
						}}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h4>{pinHotel.name} </h4>
							</ListGroup.Item>
							{pinHotel.price}

							{pinHotel.maxGuests}

							<ListGroup.Item>
								<p>Address: {pinHotel.address} </p>
							</ListGroup.Item>
						</ListGroup>
					</InfoWindow>
				)}
			</GoogleMap>
		</LoadScript>
	);
}

HotelMap.propTypes = {
	pinList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			lat: PropTypes.number.isRequired,
			lng: PropTypes.number.isRequired,
			maxGuests: PropTypes.object,
			price: PropTypes.object,
		})
	).isRequired,

	mapZoom: PropTypes.number.isRequired,
};

export default HotelMap;
