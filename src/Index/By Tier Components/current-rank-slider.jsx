import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { key, proxyurl } from "../../variables";
class CurrentRankSlider extends Component {
  state = {
    divisions: ["I", "II", "III", "IV"],
    summonerIds: [],
    accountIds: [],
    totalChampions: []
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
            let count = 1;
            for (var i in result.matches) {
              if (m.has(result.matches[i].champion)) {
                m.set(result.matches[i].champion, count++);
              } else {
                m.set(result.matches[i].champion, count);
              }
            }
          })
      )
    );
    var testing = Array.from(m.values()).sort();
    console.log(Array.from(m.values()).sort());
    //console.log(this.state.totalChampions);
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
