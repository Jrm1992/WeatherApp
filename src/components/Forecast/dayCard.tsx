import Image from 'next/image';
import React from 'react';

import { ICondition, IDay } from '.';

import dayjs from 'dayjs';
import { ArrowDown, ArrowUp } from 'phosphor-react';

interface IDayCard {
  Day: string;
  Condition: ICondition;
  Temp: IDay;
}

export default function DayCard({ Day, Condition, Temp }: IDayCard) {
  const parseDate = dayjs(Day);
  const dayAndMonth = parseDate.format('ddd, DD MMM');

  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(Day).isSame(today);

  return (
    <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A] p-2 rounded-lg m-auto">
      <span className="text-sm text-center text-[#E7E7EB]">
        {isCurrentDay ? 'Today' : dayAndMonth}
      </span>
      <div className="flex justify-center items-center">
        <Image
          src={`http:${Condition.icon}`}
          alt={Condition.text}
          width={60}
          height={60}
        />
      </div>
      <span className="text-xs mb-2 text-center mt-4">
        Chance of rain: <br />
        {Temp.daily_chance_of_rain}%
      </span>
      <div className="flex mx-auto gap-4">
        <span className="flex text-base items-center text-[#E7E7EB]">
          <ArrowUp size={12} color="#fafafa" weight="bold" />
          {Temp.maxtemp_c.toFixed(0)}°C
        </span>
        <span className="flex text-base items-center text-[#A09FB1]">
          <ArrowDown size={12} color="#A09FB1" weight="bold" />
          {Temp.mintemp_c.toFixed(0)}°C
        </span>
      </div>
    </div>
  );
}
