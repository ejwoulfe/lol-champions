import React, { Component } from "react";
import Button from "react-bootstrap/Button";
class CurrentRankSlider extends Component {
  state = {};
  render() {
    return (
      <div>
        <h5>By Tier</h5>
        <hr />
        <Button onClick={this.props.handler}> {this.props.tier} </Button>
      </div>
    );
  }
}

export default CurrentRankSlider;
