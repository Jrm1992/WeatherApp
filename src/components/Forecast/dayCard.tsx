import Image from 'next/image';
import React from 'react';

import { ICondition, IDay } from '.';

interface IDayCard {
  Day: string;
  Condition: ICondition;
  Temp: IDay;
}

export default function DayCard({ Day, Condition, Temp }: IDayCard) {
  return (
    <div className="flex flex-col justify-between max-w-[120px] h-[177px] bg-[#1E213A] p-2 rounded-lg m-auto">
      <span className="text-base text-[#E7E7EB]">{Day}</span>
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
