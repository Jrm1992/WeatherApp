'use client';

import { FormEvent, useEffect, useState } from 'react';

import Forecast from '@/components/Forecast';
import Today from '@/components/Today';

import { useGetLocation } from '@/hooks/useGetLocation';
import { api } from '@/lib/axios';
import { Crosshair, MagnifyingGlass } from 'phosphor-react';

export default function Home() {
  const { currentLocation } = useGetLocation();
  const [location, setLocation] = useState('New York');
  const [data, setData] = useState();

  async function getData() {
    if (!location) {
      return;
    }
    const { data } = await api.get(
      `forecast.json?key=011384d69f0442cdabf50136231902&q=${location}&days=6&aqi=no&alerts=no`
    );
    setData(data);
  }

  function handleChangeLocation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLocation(e.target[0].value);
    e.target[0].value = '';
  }

  useEffect(() => {
    getData();
  }, [location]);

  return (
    <main className="bg-zinc-700 flex w-full h-full lg:h-[100vh]">
      <div className="bg-[#100E1D] text-zinc-100 flex-col  p-8 w-full lg:w-[1200px] m-auto">
        <div className="flex gap-20 items-center ml-2">
          <form
            className="flex gap-2"
            onSubmit={(e) => handleChangeLocation(e)}
          >
            <input
              type="text"
              className="py-1 px-2  rounded bg-[#1E213A] outline-none"
              placeholder="Seach for places"
            />
            <button type="submit">
              <MagnifyingGlass size={24} color="#fafafa" weight="bold" />
            </button>
          </form>
          <button onClick={() => setLocation(currentLocation)}>
            <Crosshair size={32} color="#fafafa" weight="fill" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center">
          <Today TodayData={data} />
          <Forecast Forecast={data} />
        </div>
      </div>
    </main>
  );
}
