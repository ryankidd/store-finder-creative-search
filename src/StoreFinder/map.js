/* Google Maps API does not always use camelCase */
/* eslint-disable camelcase */

/*
 * https://github.com/google-map-react/google-map-react
 */
import React, { PropTypes, Component } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

import getNeighbors from './neighbors';
import defaultMap from './defaultMap';

const { zoom, containerStyle } = defaultMap;
// TODO: get input from form
const params = {
	address: '441 Eureka Ave, Silverton OR',
	componentRestrictions: {
		country: 'US',
	},
};
const input = {
	type: 'Traditional Public School',
	grades: 'Elementary',
};

const StoreFinderMap = () => {
	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback((map) => {
		const geocoder = new window.google.maps.Geocoder();

		geocoder.geocode(params, (results, status) => {
			if (status !== 'OK') {
				// eslint-disable-next-line no-console
				console.log('Unable to connect');
				return;
			}

			const { geometry, address_components } = results[0];

			const bounds = new window.google.maps.LatLngBounds(
				geometry.location
			);
			const inputState = address_components.filter(
				(part) => part.types.indexOf('administrative_area_level_1') > -1
			);
			const { short_name } = inputState.shift();
			const states = [short_name, ...getNeighbors(short_name)];

			const markers = states.map((state) =>
				fetch(`${window.rkStoreFinder.dataUrl}/${state}.json`)
					.then((response) => response.json())
					.then((json) =>
						json
							.filter((loc) => loc.type === input.type)
							.filter(
								(loc) => loc.grades.indexOf(input.grades) > -1
							)
							.map((loc) => {
								return new window.google.maps.Marker({
									position: new window.google.maps.LatLng(
										loc.lat,
										loc.lon
									),
									map,
								});
							})
					));
			console.log(markers);

			map.fitBounds(bounds);
			map.setZoom(zoom);
			setMap(map);
		});
	}, []);

	const onUnmount = React.useCallback((map) => {
		setMap(null);
	}, []);

	return (
		<div className="rk-store-finder-map">
			<GoogleMap
				mapContainerStyle={containerStyle}
				zoom={zoom}
				onLoad={onLoad}
				onUnmount={onUnmount}
			></GoogleMap>
		</div>
	);
};

export default StoreFinderMap;
