import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import inIcon from '../../../images/skansen.jpg';

const containerStyle = {
	width: '100%',
	height: '100%',
};

const MARKER_POSITION = {
	lat: 37.772,
	lng: -122.214,
};

const center = {
	lat: 60.397076,
	lng: 5.324383,
};

function HotelMap() {
	return (
		<LoadScript googleMapsApiKey='AIzaSyCYNfjg6TYg7I_NYQdd_73-UZH8Rgk2gFU'>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
				<Marker position={MARKER_POSITION} icon={pinIcon} />
				<></>
			</GoogleMap>
		</LoadScript>
	);
}

export default HotelMap;
