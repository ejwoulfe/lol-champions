import React, { Component } from "react";
import { render } from "react-dom";
import NavigationBar from "./Navigation Components/navigation-container";
import ChampionCarousel from "./Index/Jumbotron Carousel/champion-carousel";
import FreeChampions from "./Index/Free Champions Components/free-champions";
import ByTierContainer from "./Index/By Tier Components/by-tier-container";
import "bootstrap/dist/css/bootstrap.css";
import "./Index/index-style.css";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      page: "index"
    };
    this.handlePage = this.handlePage.bind(this);
  }
  handlePage(e) {
    this.setState({ page: e.currentTarget.id });
  }
  render() {
    if (this.state.page === "index") {
      return (
        <div>
          <div id="navigation">
            <NavigationBar handlePage={this.handlePage} />
          </div>
          <div id="carousel_container">
            <ChampionCarousel />
          </div>
          <div id="free_champions_container">
            <FreeChampions />
          </div>

          <div id="by_tier_container">
            <ByTierContainer />
          </div>
        </div>
      );
    } else if (this.state.page === "champions") {
      return (
        <div>
          <div id="navigation">
            <NavigationBar handlePage={this.handlePage} />
          </div>
          <h1>Hello</h1>
        </div>
      );
    }
  }
}
render(<Index />, window.document.getElementById("app"));
