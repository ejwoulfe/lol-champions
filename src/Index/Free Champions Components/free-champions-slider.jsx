import React, { Component } from "react";
import "./free-champions.scss";

class FreeChampionsSlider extends Component {
  render() {
    let freeChampions = this.props.data.map(champion => (
      <div key={champion.id} className="item">
        {champion.name} {champion.title}
      </div>
    ));
    return <ul>{freeChampions}</ul>;
  }
}

export default FreeChampionsSlider;
