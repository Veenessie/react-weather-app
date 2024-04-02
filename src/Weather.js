import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" placeholder="Enter a city" />
        <input type="submit" value="search" />
      </form>
      <h1>London</h1>
      <ul>
        <li>Tuesday 14:13</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Weather Icon"
          />
          10°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 16%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
