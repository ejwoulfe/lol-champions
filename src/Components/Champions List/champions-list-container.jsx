/* eslint-disable no-eval */
import React, { Component } from "react";
import ChampionsList from "./champions-list";
import { proxyurl } from "../../variables";

class ChampionsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { championsList: [] };
  }
  componentWillMount() {
    if (localStorage.getItem("championsList")) {
      localStorage.getItem("championsList") &&
        this.setState({
          championsList: JSON.parse(localStorage.getItem("championsList"))
        });
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    if (!localStorage.getItem("championsList")) {
      fetch(
        proxyurl +
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
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "championsList",
      JSON.stringify(nextState.championsList)
    );
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
