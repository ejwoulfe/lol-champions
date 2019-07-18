import React, { Component } from "react";
import ByTier from "./by-tier-ranked-emblems";
import CurrentRankSlider from "./current-rank-slider";
class ByTierContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: true,
      tierClickedOn: "None"
    };
    this.handler = this.handler.bind(this);
    this.handleRanked = this.handleRanked.bind(this);
  }

  handler() {
    this.handleRanked();
    this.setState({ isShowing: !this.state.isShowing });
  }
  handleRanked() {
    this.setState({ tierClickedOn: "Iron" });
  }
  render() {
    if (this.state.isShowing) {
      return <ByTier handler={this.handler} />;
    } else {
      return (
        <CurrentRankSlider
          handler={this.handler}
          tier={this.state.tierClickedOn}
        />
      );
    }
  }
}

export default ByTierContainer;
