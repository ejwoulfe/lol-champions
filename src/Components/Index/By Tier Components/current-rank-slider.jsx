import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class CurrentRankSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      summonerIds: [],
      accountIds: [],
      chosenChampionIds: [],
      championsObjectArray: [],
      isLoading: false
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  setSliderSettings() {
    let settings;
    if (this.state.width < 1000 && this.state.width > 800) {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipe: false
      };
    } else if (this.state.width < 800) {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: false
      };
    } else {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false
      };
    }
    return settings;
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    this.setSliderSettings();
  }


  fetchSummonerIds(rank) {
    if (rank === "Master" || rank === "Grandmaster" || rank === "Challenger") {
      const riotURL =
        "https://3agpr8hwd1.execute-api.us-east-2.amazonaws.com/" + process.env.REACT_APP_STAGE_NAME + "/uppertiers/" +
        rank.toLowerCase() +
        "?api_key=";
      const fetchURL = String(riotURL + process.env.REACT_APP_API_KEY);
      this.buildSummonerIdsArray("master+", fetchURL);
    } else {

      const riotURL =
        "https://3agpr8hwd1.execute-api.us-east-2.amazonaws.com/" + process.env.REACT_APP_STAGE_NAME + "/lowertiers/" +
        rank.toUpperCase() +
        "/II?api_key=";
      const fetchURL = String(riotURL + process.env.REACT_APP_API_KEY);
      this.buildSummonerIdsArray("ironToDiamond", fetchURL);
    }
  }
  async buildSummonerIdsArray(type, fetchURL) {
    if (type === "master+") {
      await fetch(fetchURL)
        .then(result => {
          if (!result.ok) {
            throw new Error(this.catchErrors());
          } else {
            return result.json();
          }
        })
        .then(result => {
          for (let index = 0; index < 10; index++) {
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
          if (!result.ok) {
            throw new Error(this.catchErrors());
          } else {
            return result.json();
          }
        })
        .then(result => {
          for (let index = 0; index < 10; index++) {
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
    for (let ids in summonerIds) {
      urls.push(
        "https://3agpr8hwd1.execute-api.us-east-2.amazonaws.com/" + process.env.REACT_APP_STAGE_NAME + "/accounts/" +
        summonerIds[ids] +
        "?api_key=" +
        process.env.REACT_APP_API_KEY,
      );
    }

    await Promise.all(
      urls.map((url, index) =>
        fetch(url)
          .then(result => {
            if (!result.ok) {
              if (index === urls.length - 1) {
                this.catchErrors();
              }
              throw new Error(result.status);
            } else {
              return result.json();
            }
          })

          .then(result => {

            if (result.accountId !== undefined) {
              this.setState({
                accountIds: [...this.state.accountIds, result.accountId]
              });
            }
          })
      )
    );

    this.fetchChampionsPlayedBySummoners(this.state.accountIds);

  }

  async fetchChampionsPlayedBySummoners(accountIds) {
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const m = new Map();
    await delay(3000);


    await Promise.all(
      accountIds.map((id, index) =>
        fetch(

          "https://3agpr8hwd1.execute-api.us-east-2.amazonaws.com/" + process.env.REACT_APP_STAGE_NAME + "/accounts/" +
          id +
          "/matches?api_key=" +
          process.env.REACT_APP_API_KEY
        )
          .then(result => {
            if (!result.ok) {
              if (index === accountIds.length - 1) {
                this.catchErrors();
              }
              throw new Error(result.status);
            } else {
              return result.json();
            }
          })
          .then(result => {


            for (let i = 0; i < result.matches.length; i++) {
              let championID = result.matches[i].champion;

              if (m.has(championID)) {
                m.set(championID, m.get(championID) + 1);
              } else {
                m.set(championID, 1);
              }
            }

          })

      )
    ).catch((error) => {
      throw new Error(this.catchErrors());
    });
    let occurenceArray = Array.from(m.values());
    let topTenValues = occurenceArray.sort((a, b) => b - a).slice(0, 16);

    this.getSliderChampionIds(m, topTenValues);
  }
  getByValue(map, searchValue, occurence) {
    let keys = [...map.entries()]
      .filter(({ 1: v }) => v === searchValue)
      .map(([k]) => k);
    return keys[occurence];
  }
  async getSliderChampionIds(map, topTenArray) {
    let topTenChampIDs = [];
    let count = 0;
    for (let i = 0; i < topTenArray.length; i++) {
      if (topTenChampIDs.includes(topTenArray.indexOf(topTenArray[i]))) {
        count += 1;
      } else {
        count = 0;
      }
      topTenChampIDs.push(topTenArray.indexOf(topTenArray[i]));
      this.setState({
        chosenChampionIds: [
          ...this.state.chosenChampionIds,
          this.getByValue(
            map,
            topTenArray.sort((a, b) => b - a).slice(0, 16)[i],
            count
          )
        ]
      });
    }
    this.getChampionFromID();

  }
  getChampionFromID() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/championFull.json"
    )
      .then(result => {
        if (!result.ok) {
          throw new Error(this.catchErrors(result.status));
        } else {
          return result.json();
        }
      })
      .then(result => {
        let chosenIDs = [...this.state.chosenChampionIds];
        for (let champion in result.data) {
          let championObject = result.data[champion];
          let currentKey = Number(championObject.key);
          let keyIndex = chosenIDs.indexOf(currentKey);

          if (chosenIDs.includes(currentKey)) {
            this.setState({
              championsObjectArray: [
                ...this.state.championsObjectArray,
                championObject
              ]
            });

            chosenIDs.splice(keyIndex, 1);
          }

          if (chosenIDs.length === 0) {
            break;
          }
        }
      });

    this.setState({ isLoading: false });
  }
  catchErrors() {

    alert(
      "Too many requests, the current limits are: \n 20 requests every 1 second and 100 requests every 2 minutes. \n Please try again in a couple of minutes."
    );

  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchSummonerIds(this.props.tier);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return (
        <div id="loading_container">
          <FontAwesomeIcon
            id="loading_spinner"
            style={{ color: "#bdf2ef" }}
            icon={faSpinner}
            spin
          />
          <h4>Retrieving Data</h4>
        </div>
      );
    }
    let mostPlayedChampions = this.state.championsObjectArray.map(champion => (
      <Card key={champion}>
        <Link
          letiant="link"
          to={{
            pathname: "champion/" + champion.name,
            state: { champion: champion }
          }}
        >
          <Card.Img
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
              champion.id +
              "_0.jpg"
            }
          />
          <h4>{champion.name}</h4>
        </Link>
      </Card>
    ));
    return (
      <div id="slider_container">
        <Slider {...this.setSliderSettings()}>{mostPlayedChampions}</Slider>
      </div>
    );
  }
}

export default CurrentRankSlider;
