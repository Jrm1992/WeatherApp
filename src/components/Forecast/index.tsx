'use client';
import React from 'react';

import DayCard from './dayCard';

import { IForecast } from '@/@types/weatherData';

export default function Forecast({ Forecast }: IForecast) {
  const humidityPercentage = Forecast
    ? (Forecast?.current.humidity / 100) * 250
    : '0';
  return (
    <div className="flex flex-col gap-8 lg:mt-12 mt-20 mx-auto">
      <div className="lg:flex lg:flex-row grid grid-cols-2 gap-4">
        {Forecast?.forecast.forecastday.map((item) => (
          <DayCard
            key={item.date}
            Condition={item.day.condition}
            Day={item.date}
            Temp={item.day}
          />
        ))}
      </div>
      <div className="">
        <span>Today’s Hightlights</span>
        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="flex flex-col items-center mt-8 bg-[#1E213A85] rounded-lg w-full max-w-[400px] h-52 justify-between p-6 text-slate-50">
            <span>Wind status</span>
            <span className="text-7xl">
              {Forecast?.current.wind_kph} <span className="text-4xl">kph</span>
            </span>
            <span>{Forecast?.current.wind_dir}</span>
          </div>
          <div className="flex flex-col items-center mt-8 bg-[#1E213A85] rounded-lg w-full max-w-[400px] h-52 justify-between p-6 text-slate-50">
            <span>Humidity</span>
            <span className="text-7xl">
              {Forecast?.current.humidity}
              <span className="text-4xl">%</span>
            </span>
            <div className="w-[250px] h-2 bg-white rounded">
              <div
                className={` h-2 bg-blue-500 rounded`}
                style={{ width: humidityPercentage }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="flex flex-col items-center mt-8 bg-[#1E213A85] rounded-lg w-full max-w-[400px] h-52 justify-between pb-16 p-6 text-slate-50">
            <span>Visibility</span>
            <span className="text-6xl">
              {Forecast?.current.vis_km} <span className="text-4xl">km</span>
            </span>
          </div>
          <div className="flex flex-col items-center mt-8 bg-[#1E213A85] rounded-lg w-full max-w-[400px] h-52 justify-between pb-16 p-6 text-slate-50">
            <span>Air Pressure</span>
            <span className="text-6xl">
              {Forecast?.current.pressure_mb}{' '}
              <span className="text-4xl">mb</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
