import * as React from 'react';

export default function useGeolocation() {
  const [coordinates, setCoordinates] = React.useState({
    error: null,
    latitude: null,
    longitude: null,
  });

  const setLocation = React.useCallback(
    ({ coords: { latitude, longitude } }) => {
      setCoordinates({
        error: false,
        latitude,
        longitude,
      });
    },
    []
  );

  const setError = React.useCallback(() => {
    setCoordinates((prevCoordinates) => ({ ...prevCoordinates, error: true }));
  }, [setCoordinates]);

  React.useEffect(() => {
    const { geolocation } = navigator;

    const fetchCoordinates = () => {
      if (geolocation) {
        geolocation.getCurrentPosition(setLocation, setError);
      } else {
        setError();
      }
    };
    fetchCoordinates();
  }, [setError, setLocation]);

  return coordinates;
}
