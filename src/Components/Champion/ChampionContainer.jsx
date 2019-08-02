import React, { Component } from "react";

class ChampionContainer extends Component {
  state = {
    champion: this.props.champion
  };
  render() {
    return (
      <div>
        <h1>Hi :) {this.state.champion.id}</h1>
      </div>
    );
  }
}

export default ChampionContainer;
