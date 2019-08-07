import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faKhanda,
  faShieldAlt,
  faRunning
} from "@fortawesome/free-solid-svg-icons";

class ChampionStats extends Component {
  state = {};
  render() {
    return (
      <div id="champion_stats_container">
        <h1>Stats</h1>
        <hr />
        <div id="stats">
          <ul>
            <h6>
              Health{" "}
              <FontAwesomeIcon
                id="health_icon"
                icon={faHeart}
                style={{ color: "#6bf376" }}
              />
            </h6>

            <li>{this.props.championStats.hp} base</li>
            <li>+{this.props.championStats.hpperlevel} per level</li>
          </ul>
          <ul>
            <h6>
              Health Regen{" "}
              <FontAwesomeIcon
                id="health_regen_icon"
                icon={faHeart}
                style={{ color: "#6bf376" }}
              />
              <span style={{ color: "#6bf376" }}>+</span>
            </h6>
            <li>{this.props.championStats.hpregen} base</li>
            <li>+{this.props.championStats.hpregenperlevel} per level</li>
          </ul>
          <ul>
            <h6>
              Attack{" "}
              <FontAwesomeIcon
                id="attack_damage_icon"
                icon={faKhanda}
                style={{ color: "#e85348" }}
              />
            </h6>
            <li>{this.props.championStats.attackdamage} base</li>
            <li>+{this.props.championStats.attackdamageperlevel} per level</li>
          </ul>
          <ul>
            <h6>
              Attack Speed{" "}
              <FontAwesomeIcon
                id="attack_damage_icon"
                icon={faKhanda}
                style={{ color: "#e85348" }}
              />
              <span style={{ color: "#e85348" }}>+</span>
            </h6>
            <li>{this.props.championStats.attackspeed} base</li>
            <li>+{this.props.championStats.attackspeedperlevel} per level</li>
          </ul>
          <ul>
            <h6>
              Armor{" "}
              <FontAwesomeIcon
                id="armor_icon"
                icon={faShieldAlt}
                style={{ color: "#f7d48a" }}
              />
            </h6>
            <li>{this.props.championStats.armor} base</li>
            <li>+{this.props.championStats.armorperlevel} per level</li>
          </ul>
          <ul>
            <h6>
              Magic Resist{" "}
              <FontAwesomeIcon
                id="magic_resist_icon"
                icon={faShieldAlt}
                style={{ color: "#575aff" }}
              />
            </h6>
            <li>{this.props.championStats.spellblock} base</li>
            <li>+{this.props.championStats.spellblockperlevel} per level</li>
          </ul>

          <ul>
            <h6>
              Movement Speed{" "}
              <FontAwesomeIcon
                id="movement_speed_icon"
                icon={faRunning}
                style={{ color: "#e0b9fa" }}
              />
            </h6>
            <li>{this.props.championStats.movespeed} base</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ChampionStats;
