'use client';

import Forecast from '@/components/Forecast';
import Today from '@/components/Today';

import Loading from './loading';

import useGetWeatherData from '@/hooks/useGetWeatherData';
import { Crosshair, MagnifyingGlass } from 'phosphor-react';

export default function Home() {
  const { weatherData, setThisLocation, setMyLocation } = useGetWeatherData();

  if (!weatherData) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-800 text-zinc-100 flex-col p-8 w-full lg:w-[1280px] m-auto lg:mt-10 shadow-2xl shadow-zinc-900 rounded-lg">
      <div className="flex lg:gap-20 gap-12 justify-center lg:justify-start items-center">
        <form className="flex gap-2" onSubmit={(e) => setThisLocation(e)}>
          <input
            type="text"
            className="py-1 px-2  rounded bg-[#1e213a85] outline-none"
            placeholder="Seach for places"
          />
          <button type="submit">
            <MagnifyingGlass size={24} color="#fafafa" weight="bold" />
          </button>
        </form>
        <button onClick={() => setMyLocation()}>
          <Crosshair size={32} color="#fafafa" weight="fill" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <Today TodayData={weatherData} />
        <Forecast Forecast={weatherData} />
      </div>
      <div className="w-full text-xs text-center mt-8">
        Powered by{' '}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </div>
    </div>
  );
}
