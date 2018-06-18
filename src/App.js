import React, { Component } from "react";
import "./App.css";

import Weather from "./containers/Weather";

class App extends Component<void, void> {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
