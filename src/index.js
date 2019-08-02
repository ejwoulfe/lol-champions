import React, { Component } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { List } from "./Components/Champions List";
import { Champion } from "./Components/Champion";
import NavigationBar from "./Components/Navigation/navigation-container";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/Index/index-style.css";
class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Route path={"/list"} component={List} />
        <Route path={"/champion/:handle"} component={Champion} />
      </BrowserRouter>
    );
  }
}
render(<Index />, window.document.getElementById("app"));
