import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class CurrentRankSlider extends Component {
  state = {
    divisions: ["I", "II", "III", "IV"],
    summonerIds: []
  };
  componentDidMount() {
    //
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const tierUpperCase = this.props.tier.toUpperCase();
    const riotURL =
      "https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" +
      tierUpperCase +
      "/II?api_key=";
    const fetchURL = String(proxyurl + riotURL + key);
    console.log(fetchURL);
    Promise.all([
      fetch(fetchURL),
      fetch(
        proxyurl +
          "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
          this.state.summonerIds[0] +
          "?api_key=" +
          key
      )
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([result1, result2]) => {
        for (var index in result1) {
          this.setState({
            summonerIds: [...this.state.summonerIds, result1[index].summonerId]
          });
        }
        console.log(result1);
      });

    // fetch(
    //   proxyurl +
    //     "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/" +
    //     this.state.summonerIds[0] +
    //     "?api_key=" +
    //     key
    // )
    //   .then(res => res.json())
    //   .then(result => {
    //     console.log(result);
    //   });
  }
  render() {
    return (
      <div>
        <h5>By Tier</h5>
        <hr />
        <Button onClick={this.props.handleTransition}>{this.props.tier}</Button>
      </div>
    );
  }
}

export default CurrentRankSlider;
