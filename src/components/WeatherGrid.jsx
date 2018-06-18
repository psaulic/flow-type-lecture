// @flow

import React from "react";
import WeatherCard from "./WeatherCard";

import "../styles/weather-grid.css";

type City = {
  city: string,
  temperature: number,
};

type Props = {
  cities: Array<City>,
  onRemove: number => void,
};

const WeatherGrid = ({ cities = [], onRemove = () => {} }: Props) => {
  return (
    <div className="weather-grid">
      {cities.map((c, id) => (
        <WeatherCard
          city={c.city}
          temperature={c.temperature}
          onRemove={() => onRemove(id)}
          key={c.city + c.temperature}
        />
      ))}
    </div>
  );
};

export default WeatherGrid;
