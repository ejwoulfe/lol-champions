import React, { Component } from "react";
import ChampionsList from "./champions-list";

class ChampionsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { championsList: [] };
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
