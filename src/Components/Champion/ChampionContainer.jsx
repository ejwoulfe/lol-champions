import React, { Component } from "react";
import ChampionName from "./champion-name";
import ChampionAbilities from "./champion-abilities";
import "./champion.scss";
import ChampionStats from "./champion-stats";
import ChampionSkins from "./champion-skins";

class ChampionContainer extends Component {
  state = {
    champion: this.props.champion
  };
  render() {
    console.log(this.state.champion);
    return (
      <div id="champion_container">
        <ChampionName
          championName={this.state.champion.name}
          championTitle={this.state.champion.title}
          championID={this.state.champion.id}
        />
        <ChampionStats championStats={this.state.champion.stats} />
        <ChampionAbilities
          championPassive={this.state.champion.passive}
          championAbilities={this.state.champion.spells}
        />
        <ChampionSkins
          championSkins={this.state.champion.skins}
          championName={this.state.champion.id}
        />
      </div>
    );
  }
}

export default ChampionContainer;
