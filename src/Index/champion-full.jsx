import React, { Component } from "react";

class fetchChampionJson extends Component {
  state = {
    championsObjectArray: []
  };

  render() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
    )
      .then(res => res.json())
      .then(result => {
        for (var champion in result.data) {
          var champObject = eval("result.data." + champion);

          this.setState({
            championsObjectsArray: [
              ...this.state.championsObjectsArray,
              champObject
            ]
          });
        }
      });
  }
}

export default fetchChampionData;
