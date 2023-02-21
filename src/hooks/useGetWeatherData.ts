import { FormEvent, useEffect, useState } from 'react';

import { useGetLocation } from './useGetLocation';

import { api } from '@/lib/axios';

export default function useGetWeatherData() {
  const { currentLocation } = useGetLocation();
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState('New York');
  async function getData() {
    if (!location) {
      return;
    }
    const { data } = await api.get(
      `forecast.json?key=011384d69f0442cdabf50136231902&q=${location}&days=6&aqi=no&alerts=yes`
    );
    setWeatherData(data);
  }

  function setMyLocation() {
    setLocation(currentLocation);
  }

  function setThisLocation(e: FormEvent<HTMLFormElement> | any) {
    e.preventDefault();
    setLocation(e.target[0].value);
    e.target[0].value = '';
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return {
    weatherData,
    setThisLocation,
    setMyLocation
  };
}
