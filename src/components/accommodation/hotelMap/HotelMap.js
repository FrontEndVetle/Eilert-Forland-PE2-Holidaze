import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
	return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 60, lng: 5 }} />;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function HotelMap() {
	return <WrappedMap />;
}
export default HotelMap;
