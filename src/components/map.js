import * as React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import mapTheme from '../utils/mapTheme';

const markerPosition = {
  lat: -22.907267350617246,
  lng: -43.188203359684444,
};

export default function Map({ coordinates = null, onMarkerClick = () => { } }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.GATSBY_MAPS_API,
  });

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={{
          height: '100%',
          width: '100%'
        }}
        zoom={5}
        center={{
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        }}
        mapTypeId="roadmap"
        options={{
          styles: mapTheme,
          disableDefaultUI: true,
        }}
      >
        <Marker
          onClick={onMarkerClick}
          position={markerPosition}
        />
      </GoogleMap>
    )
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : null;
}
