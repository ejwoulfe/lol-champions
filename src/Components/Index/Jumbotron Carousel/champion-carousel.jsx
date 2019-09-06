import React, { Component } from "react";
import "./champion-carousel.scss";
import Carousel from "react-bootstrap/Carousel";

class ChampionCarousel extends Component {
  state = {
    chosenChampions: [
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg"
    ],
    isLoading: false
  };

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    } else {
      return (
        <div id="carousel_container">
          <div id="overlay">
            <h1>Welcome to LoL Champions!</h1>
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.chosenChampions[0]}
                alt="Test Slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.chosenChampions[1]}
                alt="Test Slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.chosenChampions[2]}
                alt="Test Slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }
  }
}

export default ChampionCarousel;
