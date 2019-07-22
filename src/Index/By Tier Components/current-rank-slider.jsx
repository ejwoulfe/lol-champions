import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { key, proxyurl } from "../../variables";
class CurrentRankSlider extends Component {
  state = {
    divisions: ["I", "II", "III", "IV"],
    summonerIds: [],
    accountIds: []
  };
  buildAccountIdsArray(summonerIds) {
    for (var index in summonerIds) {
      fetch(
        "https://cors-anywhere.herokuapp.com/" +
          "https://na1.api.riotgames.com/lol/summoner/v4/summoners/" +
          summonerIds[index] +
          "?api_key=" +
          key
      )
        .then(result => {
          return result.json();
        })
        .then(result => {
          console.log(result);
        });
    }
  }
  componentDidMount() {
    const tierUpperCase = this.props.tier.toUpperCase();
    let riotURL = "";
    let idType = "";

    if (this.props.tier === "Master") {
      riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=";
    } else if (this.props.tier === "Grandmaster") {
      riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5?api_key=";
    } else if (this.props.tier === "Challenger") {
      riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=";
    } else {
      riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" +
        tierUpperCase +
        "/II?api_key=";
    }

    const fetchURL = String(proxyurl + riotURL + key);

    fetch(fetchURL)
      .then(res1 => {
        return res1.json();
      })
      .then(result1 => {
        for (var i = 0; i < 20; i++) {
          if (idType === "account") {
          } else {
            this.setState({
              summonerIds: [
                ...this.state.summonerIds,
                result1.entries[i].summonerId
              ]
            });
          }
        }

        this.buildAccountIdsArray(this.state.summonerIds);
      });
    // .then(result => {
    //   return result.json();
    // })
    // .then(result => {
    //   const test1 =
    //     proxyurl +
    //     "https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" +
    //     result.accountId +
    //     "?api_key=" +
    //     key;
    //   return fetch(test1);
    // })
    // .then(result => {
    //   return result.json();
    // })
    // .then(result => {
    //   console.log(result.matches);
    // });

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
