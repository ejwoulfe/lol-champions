import React, { Component } from "react";
import FreeChampionsSlider from "../Free Champions Components/free-champions-slider";

class FreeChampions extends Component {
  constructor() {
    super();
    this.state = {
      freeChampionIds: [],
      championsObjectArray: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const key = "RGAPI-e4112833-876a-486c-a208-7f485214a169";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // fetch(
    //   proxyurl +
    //     "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-d93343ca-83fb-4cab-a2df-ce170cba6763"
    // )
    Promise.all([
      fetch(
        proxyurl +
          "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" +
          key
      ),
      fetch(
        "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
      )
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(
        ([result1, result2]) => {
          // set state in here

          this.setState({
            freeChampionIds: result1.freeChampionIds
          });

          let tempArr = [...this.state.freeChampionIds];

          for (var champion in result2.data) {
            let championObject = eval("result2.data." + champion);
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
        }
        // error => {
        //   alert("Error");
        // }
      );

    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    // error => {
    //   alert("Error");
    // }

    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
  }

  render() {
    return (
      <React.Fragment>
        <FreeChampionsSlider data={this.state.championsObjectArray} />
      </React.Fragment>
    );
  }
}

export default FreeChampions;
