import React, { Component } from "react";

class FreeChampions extends Component {
  constructor() {
    super();
    this.state = {
      freeChampionIds: []
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(
      "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" +
        key
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        }

        // },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // error => {
        //   alert("Error");
        // }
      );
  }
  render() {
    return (
      <React.Fragment>
        <p>Hello</p>
      </React.Fragment>
    );
  }
}

export default FreeChampions;
