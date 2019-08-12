import React, { Component } from "react";
import ChampionContainer from "./Champion/ChampionContainer";

export class Champion extends Component {
  state = {
    champion: this.props.location.state.champion
  };

  componentDidUpdate() {
    if (this.props.location.state.champion !== this.state.champion) {
      this.setState({ champion: this.props.location.state.champion });
    }
  }
  render() {
    return (
      <div>
        <ChampionContainer champion={this.state.champion} />
      </div>
    );
  }
}
