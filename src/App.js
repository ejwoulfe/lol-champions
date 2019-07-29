import NavigationBar from "../src/Navigation Components/navigation-container";
import { render } from "react-dom";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div id="navigation">
        <NavigationBar />
      </div>
    );
  }
}
render(<App />, window.document.getElementById("app"));
