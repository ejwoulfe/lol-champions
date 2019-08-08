import React, { Component } from "react";
import Row from "react-bootstrap/Row";
class ChampionSkins extends Component {
  state = {
    skinsWithoutDefault: []
  };
  createSkin(skinsArray) {
    const arrayWithoutDefaultSkin = [];
    for (var i = 1; i < skinsArray.length; i++) {
      arrayWithoutDefaultSkin.push(skinsArray[i]);
    }

    return arrayWithoutDefaultSkin.map((item, index) => (
      <div key={index} className="col-md-4 col-sm-6 col-xs-12 img_container">
        <a
          href={
            "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            this.props.championName +
            "_" +
            item.num +
            ".jpg"
          }
        >
          <img
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
              this.props.championName +
              "_" +
              item.num +
              ".jpg"
            }
            alt={this.props.championName + " skin " + index}
          />
        </a>
      </div>
    ));
  }
  render() {
    console.log(this.props.championSkins);
    return (
      <div id="champion_skins_container">
        <h1>Skins</h1>

        <div id="skins">
          <Row>{this.createSkin(this.props.championSkins)}</Row>
        </div>
        <hr />
      </div>
    );
  }
}

export default ChampionSkins;
