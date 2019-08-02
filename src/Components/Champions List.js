import React, { Component } from "react";
import ChampionListContainer from "./Champions List/champions-list-container";
import "./Navigation/navigation.scss";

export class List extends Component {
  render() {
    return (
      <div>
        <ChampionListContainer />
      </div>
    );
  }
}
