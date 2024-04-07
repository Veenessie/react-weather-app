import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let max = Math.round(props.forecast.temperature.maximum);
    return <span>{max}</span>;
  }

  function minTemperature() {
    let min = Math.round(props.forecast.temperature.minimum);
    return <span>{min}</span>;
  }

  function day() {
    let time = new Date(props.forecast.time * 1000);
    let day = time.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.forecast.condition.icon_url}
          alt={props.forecast.condition.description}
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°C{" "}
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}°C
        </span>
      </div>
    </div>
  );
}
