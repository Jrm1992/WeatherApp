import { useState } from 'react';

export function useGetLocation() {
  const [currentLocation, setCurrentLocation] = useState('');

  const successCallback = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    setCurrentLocation(
      `${position.coords.latitude},${position.coords.longitude}`
    );
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  return { currentLocation };
}
