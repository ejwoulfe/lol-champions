import React, { Component } from "react";
import AbilityPreview from "./ability-preview";

class ChampionAbilities extends Component {




  render() {
    return (
      <div id="champion_abilities_container">
        <h1> Abilities</h1>
        <div id="ability_icons_container">
          <div id="passive">
            <span className="content-border">
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/passive/" +
                  this.props.championPassive.image.full
                }
                alt="passive"
              />


            </span>
            <AbilityPreview spellinfo={this.props.championPassive} type="passive" />
          </div>
          <div id="Q">
            <span className="content-border">

              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/" +
                  this.props.championAbilities[0].image.full
                }
                alt="Q"
              />

            </span>
            <AbilityPreview spellinfo={this.props.championAbilities[0]} />

          </div>
          <div id="W">
            <span className="content-border">

              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/" +
                  this.props.championAbilities[1].image.full
                }
                alt="W"
              />
            </span>
            <AbilityPreview spellinfo={this.props.championAbilities[1]} />
          </div>
          <div id="E">
            <span className="content-border">

              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/" +
                  this.props.championAbilities[2].image.full
                }
                alt="E"
              />
            </span>
            <AbilityPreview spellinfo={this.props.championAbilities[2]} />
          </div>
          <div id="R">
            <span className="content-border">
              <img
                src={
                  "https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/" +
                  this.props.championAbilities[3].image.full
                }

                alt="R"
              />
            </span>
            <AbilityPreview spellinfo={this.props.championAbilities[3]} />
          </div>
        </div>


        <hr />
      </div>
    );
  }
}

export default ChampionAbilities;