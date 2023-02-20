import Image from 'next/image';
import React from 'react';

import { ICondition, IDay } from '.';

import dayjs from 'dayjs';

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
    <div className="flex flex-col justify-between w-full max-w-[100px] h-[177px] bg-[#1E213A] p-2 rounded-lg m-auto">
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
      <div className="flex mx-auto gap-4">
        <span className="text-base text-[#E7E7EB]">{Temp.maxtemp_c}</span>
        <span className="text-base text-[#A09FB1]">{Temp.mintemp_c}</span>
      </div>
    </div>
  );
}
