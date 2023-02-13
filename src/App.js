import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App({ city }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const img =
    "https://images.unsplash.com/photo-1604428803896-c1e5151d4128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  const WEATHER_API_KEY = "46c5c814b8f56371f582ac0d63a7d64d";

  const handleOnSearchChange = (city) => {
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast/?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        console.log(weatherResponse);
        console.log(forecastResponse);
        setCurrentWeather({ city: city, ...weatherResponse });
        setForecastWeather({ city: city, ...forecastResponse });
      })
      .catch((err) => alert(err.message));
    };

  return (
    <div className="w-full h-screen overflow-scroll">
      <img className="w-full h-full absolute" src={img} alt="/" />
      <Search handleOnSearchChange={handleOnSearchChange} />

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
