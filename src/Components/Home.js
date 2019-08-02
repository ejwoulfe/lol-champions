import React, { Component } from "react";

import ChampionCarousel from "./Index/Jumbotron Carousel/champion-carousel";
import FreeChampions from "./Index/Free Champions Components/free-champions";
import ByTier from "./Index/By Tier Components/by-tier-container";

export class Home extends Component {
  render() {
    return (
      <div>
        <ChampionCarousel />
        <FreeChampions />
        <ByTier />
      </div>
    );
  }
}
