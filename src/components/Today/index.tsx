import Image from 'next/image';
import React from 'react';

import { ICurrent, ILocation } from '../Forecast';

import { MapPin } from 'phosphor-react';

interface ITodayData {
  TodayData:
    | {
        location: ILocation;
        current: ICurrent;
      }
    | undefined;
}

export default function Today({ TodayData }: ITodayData) {
  return (
    <div className="flex flex-col gap-10 w-96">
      <div className="flex justify-center">
        {TodayData && (
          <Image
            src={`http:${TodayData?.current.condition.icon}`}
            alt={TodayData?.current.condition.text}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="text-8xl flex justify-center">
        <span className="text-9xl">{TodayData?.current.temp_c}</span>
        °C
      </div>
      <div className="font-bold text-4xl flex justify-center">
        {TodayData?.current.condition.text}
      </div>
      <div className="flex flex-col justify-center text-lg gap-8">
        <div className="flex justify-center">
          {TodayData?.location.localtime}
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPin size={20} weight="fill" />
          {TodayData?.location.name}
        </div>
      </div>
    </div>
  );
}
