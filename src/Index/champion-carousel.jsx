import React, { Component } from "react";
import "../Index/index-style.css";
import Carousel from "react-bootstrap/Carousel";
import { fetchChampionInfo } from "../fetchChampionInfo";

class ChampionCarousel extends Component {
  constructor() {
    super();
    this.state = {
      championObjects: [],
      chosenNumbers: [],
      chosenChampions: []
    };
  }
  componentDidMount() {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.10.1/data/en_US/championFull.json"
    )
      .then(res => res.json())
      .then(
        result => {
          const totalNumber = 143;

          for (var champ in result.data) {
            var champObject = "result.data." + champ + ".name";
            this.setState({
              championObjects: [
                ...this.state.championObjects,
                eval(champObject)
              ]
            });
          }
          // let chosenChampions = [];
          // let chosenNumbers = [];

          for (var i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * totalNumber);
            console.log(randomNumber);
            while (this.state.chosenNumbers.includes(randomNumber)) {
              randomNumber = Math.floor(Math.random() * totalNumber);
            }

            this.setState({
              chosenChampions: [
                ...this.state.chosenChampions,
                "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                  this.state.championObjects[randomNumber] +
                  "_0.jpg"
              ],
              chosenNumbers: [...this.state.chosenNumbers, randomNumber]
            });
          }
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          alert("Error");
        }
      );
  }
  render() {
    return (
      <React.Fragment>
        {/* <div id="overlay">
          <h1>Welcome to LoL Champions!</h1>
        </div> */}
        <p>{this.state.test}</p>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src={}
              alt="First Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //src={this.randomCarouselChampion()}
              alt="Second Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //src={this.randomCarouselChampion()}
              alt="Third Slide"
            />
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default ChampionCarousel;
