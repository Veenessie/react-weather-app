import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let max = Math.round(props.forecast[0].temperature.maximum);
    return <span>{max}</span>;
  }

  function minTemperature() {
    let min = Math.round(props.forecast[0].temperature.minimum);
    return <span>{min}</span>;
  }

  function day() {
    let time = new Date(props.forecast[0].time * 1000);
    let day = time.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.forecast[0].condition.icon_url}
          alt={props.forecast[0].condition.description}
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
