import React, { Component } from "react";
import ChampionsList from "./champions-list";


class ChampionsListContainer extends Component {
  constructor() {
    super();
    this.state = { championsList: [] };
  }

  componentDidMount() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/championFull.json"
    )
      .then(result => result.json())
      .then(result => {
        for (let champion in result.data) {
          let champObject = result.data[champion];
          this.setState({
            championsList: [...this.state.championsList, champObject]
          });
        }
      });
  }

  render() {
    return (
      <div id="champions_list_container">
        <h1 id="title">Champions List</h1>
        <hr />
        <ChampionsList list={this.state.championsList} />
      </div>
    );
  }
}

export default ChampionsListContainer;
