import React, { useState } from 'react';
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

function HotelMap({ pinList }) {
	const [pinHotel, setPinHotel] = useState(null);

	return (
		<div className='google-map'>
			<LoadScript googleMapsApiKey='AIzaSyCYNfjg6TYg7I_NYQdd_73-UZH8Rgk2gFU'>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={12}
					defaultOptions={{ styles: MapStyles }}>
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
							<div>{pinHotel.name} </div>
						</InfoWindow>
					)}
				</GoogleMap>
			</LoadScript>
		</div>
	);
}

export default HotelMap;
