import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";


const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div className="fixed">
      <div className="fixed flex justify-center overflow-scroll my-24 w-full py-12">
        <Accordion className="sm:w-[75%] md:w-[55%] lg:w-[35%] overflow-scroll py-7" allowZeroExpanded>
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem className='cursor-pointer' key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="h-[40px] flex items-center justify-between bg-slate-100/80 rounded-md m-[5px] px-4 py-2">
                    <img
                      alt="weather"
                      className="h-[40px]"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="flex-1 font-bold ml-[15px]">{forecastDays[index]}</label>
                    <label className='capitalize flex-1'>
                      {item.weather[0].description}
                    </label>
                    <label className="text-gray-600">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-2 grid-rows-3 gap-3 bg-slate-100/60 rounded-md p-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">Pressure:</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">See level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="text-gray-600 font-semibold">Feels like:</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Forecast;
