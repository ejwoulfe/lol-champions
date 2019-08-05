import React, { Component } from "react";
import ChampionContainer from "./Champion/ChampionContainer";

export class Champion extends Component {
  render() {
    return (
      <div>
        <ChampionContainer champion={this.props.location.state.champion} />
      </div>
    );
  }
}
