import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { key, proxyurl } from "../../variables";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";

class CurrentRankSlider extends Component {
  state = {
    summonerIds: [],
    accountIds: [],
    chosenChampionIds: [],
    championsObjectArray: []
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
  }
  getByValue(map, searchValue, occurence) {
    let keys = [...map.entries()]
      .filter(({ 1: v }) => v === searchValue)
      .map(([k]) => k);
    return keys[occurence];
  }
  getSliderChampionIds(map, topTenArray) {
    let tempArr = [];
    let count = 0;
    for (var i = 0; i < topTenArray.length; i++) {
      if (tempArr.includes(topTenArray.indexOf(topTenArray[i]))) {
        count += 1;
      } else {
        count = 0;
      }
      tempArr.push(topTenArray.indexOf(topTenArray[i]));
      this.setState({
        chosenChampionIds: [
          ...this.state.chosenChampionIds,
          this.getByValue(
            map,
            topTenArray.sort((a, b) => b - a).slice(0, 10)[i],
            count
          )
        ]
      });
    }
    this.getChampionFromID();
  }
  getChampionFromID() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
    )
      .then(res => res.json())
      .then(result => {
        let tempArr = [...this.state.chosenChampionIds];
        for (var champion in result.data) {
          let championObject = eval("result.data." + champion);
          let currentKey = Number(championObject.key);
          let keyIndex = tempArr.indexOf(currentKey);

          if (tempArr.includes(currentKey)) {
            this.setState({
              championsObjectArray: [
                ...this.state.championsObjectArray,
                championObject
              ]
            });

            tempArr.splice(keyIndex, 1);
          }

          if (tempArr.length === 0) {
            break;
          }
        }
      });
  }
  componentDidMount() {
    this.fetchSummonerIds(this.props.tier);
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    let freeChampions = this.state.championsObjectArray.map(champion => (
      <Card key={champion} className="item">
        <Card.Img
          src={
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            champion.id +
            "_0.jpg"
          }
        />
        <h4>{champion.name}</h4>
      </Card>
    ));
    return (
      <div>
        <h5>By Tier</h5>
        <hr />
        <h1>{this.props.tier}</h1>
        <Button onClick={this.props.handleTransition}>{this.props.tier}</Button>
        <div>
          <Slider {...settings}>{freeChampions}</Slider>
        </div>
      </div>
    );
  }
}

export default CurrentRankSlider;
