import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

class CurrentRankInformation extends Component {
  render() {
    return (
      <div id="current_rank_container">
        <h5>By Tier</h5>
        <hr />
        <div id="rank_information">
          <Button onClick={this.props.handleTransition} variant="link">
            <span>
              <FontAwesomeIcon id="back_arrow" icon={faArrowLeft} />
            </span>
          </Button>
          <h1>{this.props.tier}</h1>
          <img
            src={this.props.image}
            alt="current rank emblem"
            id="current_rank_image"
          />
        </div>
      </div>
    );
  }
}

export default CurrentRankInformation;
