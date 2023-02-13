import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import Search from "./components/Search";

function App({ city }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const img =
    "https://img.freepik.com/free-photo/misty-carpathian-mountain-landscape-with-fir-forest-tops-trees-sticking-out-fog_146671-18437.jpg?w=1380&t=st=1676290465~exp=1676291065~hmac=1931a3ebfd6bec09814b74ea884811da28aa269a607d2de823140e4d4fd83c46";

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
