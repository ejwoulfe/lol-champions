import React, { Component } from "react";
import ChampionsList from "./champions-list";

class ChampionsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { championsList: [], isStored: false };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    console.log(this.state.isStored);
    if (this.state.isStored === false) {
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
          localStorage.setItem(
            "championsList",
            JSON.stringify(this.state.championsList)
          );
          this.setState({ isStored: true });
        });
    } else if (this.state.isStored === true) {
      console.log(":)");
    }
  }
  // championClickedOn(e) {
  //   this.setState({ clickedChampion: e.currentTarget.querySelector("img").id });
  //   this.setState({
  //     clickedLocation: e.currentTarget.querySelector(".overlay").id
  //   });
  // }
  // getChampionsData(championName, location) {
  //   this.props.history.push("/champion", {
  //     championObject: this.state.championsList[location]
  //   });
  //   // console.log(championName);
  //   // console.log(this.state.championsList[location]);
  //   // this.setState({ clickedChampionObject: );
  // }
  // componentDidUpdate() {
  //   this.getChampionsData(
  //     this.state.clickedChampion,
  //     this.state.clickedLocation
  //   );
  // }

  render() {
    return (
      <div id="champions_list_container">
        <ChampionsList list={this.state.championsList} />
      </div>
    );
  }
}

export default ChampionsListContainer;
