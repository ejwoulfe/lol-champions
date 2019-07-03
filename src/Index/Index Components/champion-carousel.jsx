import React, { Component } from "react";
import "../index-style.css";
import Carousel from "react-bootstrap/Carousel";

class ChampionCarousel extends Component {
  state = {
    randomChampion: [
      "Aatrox",
      "Akali",
      "Kayle",
      "Warwick",
      "Darius",
      "Caitlyn",
      "Ezreal",
      "Camille",
      "Ivern"
    ]
  };

  randomCarouselChampion() {
    const number = Math.floor(Math.random() * 9);
    return (
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
      this.state.randomChampion[number] +
      "_0.jpg"
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div id="overlay">
            <h1>Welcome to LoL Champions!</h1>
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.randomCarouselChampion()}
                alt="First Slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.randomCarouselChampion()}
                alt="Second Slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.randomCarouselChampion()}
                alt="Third Slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}

export default ChampionCarousel;
