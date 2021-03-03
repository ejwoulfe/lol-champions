import React, { Component } from "react";
import AbilityPreview from "./ability-preview";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
class ChampionAbilities extends Component {
  state = {};

  render() {
    return (
      <div id="champion_abilities_container">
        <h1> Abilities</h1>
        <div id="ability_icons_container">
          <div id="passive">
            <span className="content-border">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <AbilityPreview
                    spellinfo={this.props.championPassive}
                    type="passive"
                  />
                }
                rootClose
              >
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/passive/" +
                    this.props.championPassive.image.full
                  }
                  alt="passive"
                />
              </OverlayTrigger>
            </span>
          </div>
          <div id="Q">
            <span className="content-border">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <AbilityPreview spellinfo={this.props.championAbilities[0]} />
                }
                rootClose
              >
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/spell/" +
                    this.props.championAbilities[0].image.full
                  }
                  alt="Q"
                />
              </OverlayTrigger>
            </span>
          </div>
          <div id="W">
            <span className="content-border">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <AbilityPreview spellinfo={this.props.championAbilities[1]} />
                }
                rootClose
              >
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/spell/" +
                    this.props.championAbilities[1].image.full
                  }
                  alt="W"
                />
              </OverlayTrigger>
            </span>
          </div>
          <div id="E">
            <span className="content-border">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <AbilityPreview spellinfo={this.props.championAbilities[2]} />
                }
                rootClose
              >
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/spell/" +
                    this.props.championAbilities[2].image.full
                  }
                  alt="E"
                />
              </OverlayTrigger>
            </span>
          </div>
          <div id="R">
            <span className="content-border">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <AbilityPreview spellinfo={this.props.championAbilities[3]} />
                }
                rootClose
              >
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/11.5.1/img/spell/" +
                    this.props.championAbilities[3].image.full
                  }
                  alt="R"
                />
              </OverlayTrigger>
            </span>
          </div>
        </div>
        <div id="alert">
          <FontAwesomeIcon icon={faArrowUp} id="alert_arrow" />
          <h4>Click an icon to see the ability description!</h4>
        </div>
        <hr />
      </div>
    );
  }
}

export default ChampionAbilities;
