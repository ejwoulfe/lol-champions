import React, { Component } from "react";
import ByTier from "./by-tier";
class ByTierContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: true
    };
    this.handler = this.handler.bind(this);
  }
  handler() {
    this.setState({ isShowing: !this.state.isShowing });
  }
  render() {
    if (this.state.isShowing) {
      return <ByTier handler={this.handler} />;
    } else {
    }
  }
}

export default ByTierContainer;
