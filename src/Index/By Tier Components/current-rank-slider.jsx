import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { key, proxyurl } from "../../variables";
class CurrentRankSlider extends Component {
  state = {
    divisions: ["I", "II", "III", "IV"],
    summonerIds: [],
    accountIds: [],
    totalChampions: [],
    chosenChampionIds: []
  };

  fetchSummonerIds(rank) {
    if (rank === "Master" || rank === "Grandmaster" || rank === "Challenger") {
      const riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/" +
        rank.toLowerCase() +
        "leagues/by-queue/RANKED_SOLO_5x5?api_key=";
      const fetchURL = String(proxyurl + riotURL + key);
      this.buildSummonerIdsArray("master+", fetchURL);
    } else {
      const riotURL =
        "https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/" +
        rank.toUpperCase() +
        "/II?api_key=";
      const fetchURL = String(proxyurl + riotURL + key);
      this.buildSummonerIdsArray("ironToDiamond", fetchURL);
    }
  }
  async buildSummonerIdsArray(type, fetchURL) {
    if (type === "master+") {
      await fetch(fetchURL)
        .then(result => {
          return result.json();
        })
        .then(result => {
          for (var index = 0; index < 20; index++) {
            this.setState({
              summonerIds: [
                ...this.state.summonerIds,
                result.entries[index].summonerId
              ]
            });
          }
        });
    } else {
      await fetch(fetchURL)
        .then(result => {
          return result.json();
        })
        .then(result => {
          for (var index = 0; index < 20; index++) {
            this.setState({
              summonerIds: [...this.state.summonerIds, result[index].summonerId]
            });
          }
        });
    }
    this.fetchAccountIds(this.state.summonerIds);
  }
  async fetchAccountIds(summonerIds) {
    let urls = [];
    for (var ids in summonerIds) {
      urls.push(
        proxyurl +
          "https://na1.api.riotgames.com/lol/summoner/v4/summoners/" +
          summonerIds[ids] +
          "?api_key=" +
          key
      );
    }

    await Promise.all(
      urls.map(url =>
        fetch(url)
          .then(result => {
            return result.json();
          })

          .then(result => {
            this.setState({
              accountIds: [...this.state.accountIds, result.accountId]
            });
          })
      )
    );

    this.fetchChampionsPlayedBySummoners(this.state.accountIds);
  }
  async fetchChampionsPlayedBySummoners(accountIds) {
    const m = new Map();
    let max = 0;
    let count = 1;

    await Promise.all(
      accountIds.map(id =>
        fetch(
          proxyurl +
            "https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" +
            id +
            "?api_key=" +
            key
        )
          .then(result => {
            return result.json();
          })

          .then(result => {
            for (var i = 0; i < result.matches.length; i++) {
              let championID = result.matches[i].champion;

              if (m.has(championID)) {
                m.set(championID, m.get(championID) + 1);
              } else {
                m.set(championID, 1);
              }
            }
          })
      )
    );
    var occurenceArray = Array.from(m.values());
    var topTenValues = occurenceArray.sort((a, b) => b - a).slice(0, 10);
    this.getSliderChampionIds(m, topTenValues);

    //console.log(this.state.totalChampions);
  }
  getByValue(map, searchValue) {
    //console.log(this.state.chosenChampionIds);
    // for (let [key, value] of map.entries()) {
    //   if (value === searchValue) {
    //     return key;
    //   }
    // }
    let jhonKeys = [...map.entries()]
      .filter(({ 1: v }) => v === searchValue)
      .map(([k]) => k);
    if (jhonKeys.length > 1) {
      console.log(jhonKeys);
    }
  }
  getSliderChampionIds(map, topTenArray) {
    for (var i = 0; i < topTenArray.length; i++) {
      this.setState({
        chosenChampionIds: [
          ...this.state.chosenChampionIds,
          this.getByValue(
            map,
            topTenArray.sort((a, b) => b - a).slice(0, 10)[i]
          )
        ]
      });
    }
  }
  componentWillMount() {
    this.fetchSummonerIds(this.props.tier);
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
