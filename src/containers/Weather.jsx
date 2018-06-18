// @flow

import React, { Component } from "react";
import WeatherGrid from "../components/WeatherGrid";
import { getWeather } from "../services/Http";
import { sortBy } from "lodash";

type City = {
  city: string,
  temperature: number,
};

type State = {
  cities: Array<City>,
  value: string,
};

type Event = {
  currentTarget: {
    value?: string,
  },
  preventDefault: void => void,
};

class Weather extends Component<{}, State> {
  constructor() {
    super();
    (this: any).handleChange = this.handleChange.bind(this);
    (this: any).handleRemove = this.handleRemove.bind(this);
    (this: any).onSubmit = this.onSubmit.bind(this);
    this.state = {
      cities: [
        {
          city: "Belgrade",
          temperature: 23,
        },
        {
          city: "Subotica",
          temperature: 32,
        },
      ],
      value: "",
    };
  }

  handleChange(event: Event) {
    const value: string = event.currentTarget.value || "";
    this.setState(() => ({ value }));
  }

  handleRemove(id: number) {
    this.setState(() => ({
      cities: this.state.cities.filter((_city, idx) => idx !== id),
    }));
  }

  onSubmit(e: Event) {
    e.preventDefault();
    getWeather(this.state.value)
      .then(res =>
        this.setState(() => ({
          cities: [
            ...this.state.cities.filter(c => c.city !== res.data.name),
            {
              city: res.data.name,
              temperature: Math.round(res.data.main.temp - 273.15),
            },
          ],
          value: "",
        }))
      )
      .catch(console.error);
  }

  render() {
    return (
      <div className="weather-getter">
        <form onSubmit={this.onSubmit} className="city-weater-search">
          <label>City:</label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <WeatherGrid cities={this.state.cities} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default Weather;
