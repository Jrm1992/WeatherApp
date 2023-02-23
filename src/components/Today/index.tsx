import Image from 'next/image';
import React from 'react';

import { Forecast, IAlerts, ICurrent, ILocation } from '@/@types/weatherData';
import dayjs from 'dayjs';
import { MapPin } from 'phosphor-react';

interface ITodayData {
  TodayData:
    | {
        location: ILocation;
        current: ICurrent;
        forecast: Forecast;
        alerts: IAlerts;
      }
    | undefined;
}

export default function Today({ TodayData }: ITodayData) {
  const parseDate = dayjs(TodayData?.location.localtime);
  const dayAndMonth = parseDate.format('dddd • DD MMMM');
  return (
    <div className="flex flex-col gap-10 w-96 bg-[#1E213A85] rounded-lg p-4 pb-8 mt-12">
      <div className="flex justify-center">
        {TodayData && (
          <Image
            src={`http:${TodayData?.current.condition.icon}`}
            alt={TodayData?.current.condition.text}
            width={200}
            height={200}
          />
        )}
      </div>
      <div className="text-8xl flex flex-col items-center justify-center">
        <span className="text-9xl">
          {TodayData?.current.temp_c.toFixed(0)}
          <span className="text-6xl">°C</span>
        </span>
        <span className="text-sm mt-4">
          Real feel:
          <span className="text-lg">
            {` ${TodayData?.current.feelslike_c.toFixed(0)}°C`}
          </span>
        </span>
        <span className="text-sm mt-4">
          UV index:
          <span className="text-lg">
            {` ${TodayData?.current.uv.toFixed(0)}`}
          </span>
        </span>
      </div>
      <div className="font-bold text-4xl flex text-center justify-center">
        {TodayData?.current.condition.text}
      </div>
      <div className="flex flex-col justify-center text-lg gap-8">
        <div className="flex justify-center">{dayAndMonth}</div>
        <div className="flex items-center justify-center gap-2">
          <MapPin size={20} weight="fill" />
          {TodayData?.location.name}
        </div>
      </div>
    </div>
  );
}
