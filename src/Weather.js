import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>London</h1>
        <ul>
          <li>Tuesday 14:13</li>
          <li>Mostly Cloudy</li>
        </ul>
      </header>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Weather Icon"
          />
          <span className="temperature">
            <span className="value">10</span>
            <span className="unit">°C</span>
          </span>
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
