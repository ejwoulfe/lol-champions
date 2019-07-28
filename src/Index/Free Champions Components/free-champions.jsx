import React, { Component } from "react";
import FreeChampionsSlider from "../Free Champions Components/free-champions-slider";
import { key, proxyurl } from "../../variables";

class FreeChampions extends Component {
  constructor() {
    super();
    this.state = {
      freeChampionIds: [],
      championsObjectArray: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

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
          this.setState({ isLoading: false });
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
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <React.Fragment>
        <FreeChampionsSlider data={this.state.championsObjectArray} />
      </React.Fragment>
    );
  }
}

export default FreeChampions;
