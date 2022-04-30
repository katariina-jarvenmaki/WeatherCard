// Importing needed components
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import WeatherCard from "./WeatherCard/component";

// WeatherEngine structure
const WeatherEngine = ({ location }) => {
  // Defauls for state variables
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  // Defining the data fetching function
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=487324d6ec1c826ffc663fe63d2509d2`
      );
      const resJSON = await apiRes.json();
      // return resJSON;
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Fetch stockdata - this hook will make code tun only once the component is mounted and never again
  useEffect(() => {
    getWeather(location);
  }, [location]);

  // Errors
  if (error) {
    return (
      <div style={{ color: "black" }}>
        There has been an error! <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  // If app is loading
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "280px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }

  // Show the app contents
  return (
    <WeatherCard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

// Exports
export default WeatherEngine;
