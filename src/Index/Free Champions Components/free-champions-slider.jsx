import React, { Component } from "react";

class FreeChampionsSlider extends Component {
  render() {
    const handleOnDragStart = e => e.preventDefault();
    let freeChampions = this.props.data.map(champion => (
      <div key={champion.id} className="item">
        {champion.name} {champion.title}
      </div>
    ));
    return <ul>{freeChampions}</ul>;
  }
}

export default FreeChampionsSlider;
