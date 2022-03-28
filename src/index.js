import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { List } from "./Components/Champions List";
import { Champion } from './Components/Champion.js'
import NavigationBar from "./Components/Navigation/navigation-container";
import "bootstrap/dist/css/bootstrap.css";
import "./Components/Index/index-style.css";

class Index extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path={"/list"} element={<List />} />
          <Route path={"/champion/:handle"} element={<Champion />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
render(<Index />, window.document.getElementById("app"));
