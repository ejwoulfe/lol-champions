import React, { Component } from "react";
import "./champion-carousel.scss";
import Carousel from "react-bootstrap/Carousel";

class ChampionCarousel extends Component {
  constructor() {
    super();
    this.state = {
      championObjects: [],
      chosenNumbers: [],
      chosenChampions: [],
      isLoading: false
    };
    this._isMounted = false;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: true });
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/9.13.1/data/en_US/championFull.json"
    )
      .then(res => res.json())
      .then(
        result => {
          const totalNumber = 143;

          for (var champion in result.data) {
            var champObject = eval("result.data." + champion + ".id");

            this._isMounted &&
              this.setState({
                championObjects: [...this.state.championObjects, champObject]
              });
          }

          for (var i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * totalNumber);
            while (this.state.chosenNumbers.includes(randomNumber)) {
              randomNumber = Math.floor(Math.random() * totalNumber);
            }

            this._isMounted &&
              this.setState({
                chosenChampions: [
                  ...this.state.chosenChampions,
                  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
                    this.state.championObjects[randomNumber] +
                    "_0.jpg"
                ],
                chosenNumbers: [...this.state.chosenNumbers, randomNumber],
                isLoading: false
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
