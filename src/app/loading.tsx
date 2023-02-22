export default function Loading() {
  return (
    <div className="bg-gradient-to-r from-cyan-800 to-blue-800 text-zinc-100 flex-col p-8 w-full lg:w-[1280px] m-auto lg:mt-10 shadow-2xl shadow-zinc-900 rounded-lg">
      <div className="flex lg:gap-20 gap-12 justify-center lg:justify-start items-center">
        <div className="py-1 px-2 h-8 w-[216px] rounded bg-[#1E213A85] animate-pulse outline-none" />
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="flex flex-col gap-10 w-96 h-[722px] bg-[#1E213A85] animate-pulse rounded-lg p-4 pb-8 mt-12" />
        <div className="flex flex-col gap-8 lg:mt-12 mt-20 mx-auto">
          <div className="lg:flex lg:flex-row grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
            <div className="flex flex-col justify-between w-[120px] h-[177px] bg-[#1E213A85] animate-pulse p-2 rounded-lg m-auto" />
          </div>
          <div className="flex gap-10 lg:flex-row flex-col">
            <div className="flex flex-col items-center mt-8 bg-[#1E213A85] animate-pulse rounded-lg w-[380px] h-52 justify-between p-6 text-slate-50" />
            <div className="flex flex-col items-center mt-8 bg-[#1E213A85] animate-pulse rounded-lg w-[380px] h-52 justify-between p-6 text-slate-50" />
          </div>
          <div className="flex gap-10 lg:flex-row flex-col">
            <div className="flex flex-col items-center mt-8 bg-[#1E213A85] animate-pulse rounded-lg w-[380px] h-52 justify-between p-6 text-slate-50" />
            <div className="flex flex-col items-center mt-8 bg-[#1E213A85] animate-pulse rounded-lg w-[380px] h-52 justify-between p-6 text-slate-50" />
          </div>
        </div>
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
