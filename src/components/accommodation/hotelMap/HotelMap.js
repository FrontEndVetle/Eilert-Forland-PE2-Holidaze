import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class HotelMap extends Component {
	static defaultProps = {
		center: {
			lat: 60.397076,
			lng: 5.324383,
		},
		zoom: 11,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyCYNfjg6TYg7I_NYQdd_73-UZH8Rgk2gFU',
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<AnyReactComponent lat={60.397076} lng={5.324383} text='My Marker' />
				</GoogleMapReact>
			</div>
		);
	}
}

export default HotelMap;
