import React, { Component } from "react";
import NavigationBar from "./Navigation/navigation-container";
import ChampionCarousel from "./Index/Jumbotron Carousel/champion-carousel";
import FreeChampions from "./Index/Free Champions Components/free-champions";
import ByTier from "./Index/By Tier Components/by-tier-container";

export class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <ChampionCarousel />
        <FreeChampions />
        <ByTier />
      </div>
    );
  }
}
