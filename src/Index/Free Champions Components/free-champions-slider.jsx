import React, { Component } from "react";
import "./free-champions.scss";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";

class FreeChampionsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    let freeChampions = this.props.data.map(champion => (
      <Card key={champion.id} className="item">
        <Card.Img
          src={
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
            champion.id +
            "_0.jpg"
          }
        />
        <h4>{champion.id}</h4>
      </Card>
    ));
    return (
      <React.Fragment>
        <h5>Free Champions for the Week</h5>
        <hr />
        <Slider {...settings}>{freeChampions}</Slider>
      </React.Fragment>
    );
  }
}

export default FreeChampionsSlider;
