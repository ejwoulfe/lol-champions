import React, { Component } from "react";
import "../index-style.css";
import "../../API/api_key";

class Carousel extends Component {
  state = {
    randomChampion: ["Aatrox", "Akali", "Kayle", "Warwick"]
  };

  test() {
    const number = Math.floor(Math.random() * 4);
    return (
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
      this.state.randomChampion[number] +
      "_0.jpg"
    );
  }

  render() {
    return <React.Fragment />;
  }
}

export default Carousel;
