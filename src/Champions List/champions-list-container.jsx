import React, { Component } from "react";
import ChampionsList from "./champions-list";

class ChampionsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { championsList: [], clickedChampion: "", clickedLocation: 0 };
    this.championClickedOn = this.championClickedOn.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
    )
      .then(res => res.json())
      .then(result => {
        for (var champion in result.data) {
          var champObject = eval("result.data." + champion);
          this.setState({
            championsList: [...this.state.championsList, champObject]
          });
        }
      });
  }
  championClickedOn(e) {
    this.setState({ clickedChampion: e.currentTarget.querySelector("img").id });
    this.setState({
      clickedLocation: e.currentTarget.querySelector(".overlay").id
    });
  }
  getChampionsData(championName, location) {
    console.log(championName);
    console.log(this.state.championsList[location]);
    // this.setState({ clickedChampionObject: );
  }
  componentDidUpdate() {
    this.getChampionsData(
      this.state.clickedChampion,
      this.state.clickedLocation
    );
  }

  render() {
    return (
      <div>
        <ChampionsList
          list={this.state.championsList}
          championClickedOn={this.championClickedOn}
        />
      </div>
    );
  }
}

export default ChampionsListContainer;
