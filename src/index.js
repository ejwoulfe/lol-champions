import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavigationBar from "./Navigation Components/navigation-container";
import ChampionCarousel from "./Index/Jumbotron Carousel/champion-carousel";
import FreeChampions from "./Index/Free Champions Components/free-champions";
import ByTierContainer from "./Index/By Tier Components/by-tier-container";

import "bootstrap/dist/css/bootstrap.css";
import "./Index/index-style.css";
ReactDOM.render(<NavigationBar />, document.getElementById("navigation"));

ReactDOM.render(
  <ChampionCarousel />,
  document.getElementById("carousel_container")
);
ReactDOM.render(
  <FreeChampions />,
  document.getElementById("free_champions_container")
);
ReactDOM.render(
  <ByTierContainer />,
  document.getElementById("by_tier_container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
