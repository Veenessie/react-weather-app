import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <header>
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatedDate date={props.data.time} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </header>
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {" "}
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
