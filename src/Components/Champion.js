import React, { Component } from "react";
import ChampionContainer from "./Champion/ChampionContainer";
import NavigationBar from "./Navigation/navigation-container";

export class Champion extends Component {
  render() {
    return (
      <div>
        <ChampionContainer />
      </div>
    );
  }
}
