import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavigationBar from "./Navigation Components/navigation-container";
import ChampionsListContainer from "./Champions List Page/champions_list_container";
import "bootstrap/dist/css/bootstrap.css";
import "./Index/index-style.css";

ReactDOM.render(
  <ChampionsListContainer />,
  document.getElementById("carousel_container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
