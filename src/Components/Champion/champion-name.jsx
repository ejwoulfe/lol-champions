import React, { Component } from "react";

class ChampionName extends Component {
  render() {
    return (
      <div id="champion_name_container">
        <img
          src={
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            this.props.championID +
            "_0.jpg"
          }
          alt={this.props.championName}
        />
        <div id="name_and_title">
          <h1>{this.props.championName}</h1>
          <h5>{this.props.championTitle}</h5>
        </div>
      </div>
    );
  }
}

export default ChampionName;
