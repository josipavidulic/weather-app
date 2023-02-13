
const CurrentWeather = ({data}) => {
  return (
    <div className="flex justify-center py-20 my-8">
    <div className="w-[300px] bg-slate-100/60 p-6 rounded-md fixed">
      <div className="flex justify-between items-center">
        <div>
          <p className="capitalize font-extrabold text-3xl">{data.city}</p>
          <p className="capitalize text-l">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="w-full/80" src={`icons/${data.weather[0].icon}.png`}/>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-5xl font-extrabold">{Math.round(data.main.temp)}°C</p>
        <div className="w-full pl-4">
          <div className="flex justify-between">
            <span className="text-xs">Details</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs">Feels like</span>
            <span className="font-bold text-xs">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs">Wind</span>
            <span className="font-bold text-xs">{data.wind.speed} m/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs">Humidity</span>
            <span className="font-bold text-xs">{data.main.humidity}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs">Pressure</span>
            <span className='font-bold text-xs'>{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CurrentWeather;
