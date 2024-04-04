import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="text"
            placeholder="Enter a city"
            className="city-search"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="city-submit" />
        </form>
        <header>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Tuesday 14:13</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </header>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            <span className="temperature">
              <span className="value">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.defaultCity;
    let apiKey = `7b12a4c8c3fba7979089o3b3ff6teab1`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
