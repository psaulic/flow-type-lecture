//@flow

import React, { Component } from "react";
import "../styles/weather-card.css";

type Props = {
  city: string,
  temperature: number,
  onRemove: number => void,
};

class WeatherCard extends Component<Props> {
  render() {
    return (
      <div className="weather-card">
        <div className="header">
          <div className="weather-card-title">{this.props.city}</div>
          <button className="remove-city" onClick={this.props.onRemove}>
            Remove
          </button>
        </div>
        <div className="weather-card-temperature">{this.props.temperature}</div>
      </div>
    );
  }
}

export default WeatherCard;
