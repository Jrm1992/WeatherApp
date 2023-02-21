'use client';
import React from 'react';

import DayCard from './dayCard';

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number;
}

export interface ICurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ICondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface ICondition2 {
  text: string;
  icon: string;
  code: number;
}

export interface IDay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: ICondition2;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Condition3 {
  text: string;
  icon: string;
  code: number;
}

export interface IHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition3;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: IDay;
  astro: Astro;
  hour: IHour[];
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface IAlerts {
  alert: IAlert[];
}

export interface IAlert {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  certainty: string;
  event: string;
  note: string;
  effective: string;
  expires: string;
  desc: string;
  instruction: string;
}

export interface IForecast {
  Forecast:
    | {
        location: ILocation;
        current: ICurrent;
        forecast: Forecast;
        alerts: IAlerts;
      }
    | undefined;
}

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
          <div className="flex flex-col items-center mt-8 bg-[#1E213A] rounded-lg w-full max-w-[400px] h-52 justify-between p-6 text-slate-50">
            <span>Wind status</span>
            <span className="text-7xl">
              {Forecast?.current.wind_kph} <span className="text-4xl">kph</span>
            </span>
            <span>{Forecast?.current.wind_dir}</span>
          </div>
          <div className="flex flex-col items-center mt-8 bg-[#1E213A] rounded-lg w-full max-w-[400px] h-52 justify-between p-6 text-slate-50">
            <span>Humidity</span>
            <span className="text-7xl">
              {Forecast?.current.humidity}
              <span className="text-4xl">%</span>
            </span>
            <div className="w-[250px] h-2 bg-white rounded">
              <div
                className={` h-2 bg-yellow-600 rounded`}
                style={{ width: humidityPercentage }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 lg:flex-row flex-col">
          <div className="flex flex-col items-center mt-8 bg-[#1E213A] rounded-lg w-full max-w-[400px] h-52 justify-between pb-16 p-6 text-slate-50">
            <span>Visibility</span>
            <span className="text-6xl">
              {Forecast?.current.vis_km} <span className="text-4xl">km</span>
            </span>
          </div>
          <div className="flex flex-col items-center mt-8 bg-[#1E213A] rounded-lg w-full max-w-[400px] h-52 justify-between pb-16 p-6 text-slate-50">
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
