import React, { Component } from "react";
import "./free-champions.scss";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class FreeChampionsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    this.setSliderSettings();
  }
  setSliderSettings() {
    var settings;
    if (this.state.width < 1000 && this.state.width > 800) {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    } else if (this.state.width < 800) {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    } else {
      settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    }
    return settings;
  }
  render() {
    let freeChampions = this.props.data.map(champion => (
      <Card key={champion.id} className="item">
        <Link
          variant="link"
          to={{
            pathname: "champion/" + champion.name,
            state: { champion: champion }
          }}
        >
          <Card.Img
            src={
              "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" +
              champion.id +
              "_0.jpg"
            }
          />

          <h4>{champion.name}</h4>
        </Link>
      </Card>
    ));
    return (
      <React.Fragment>
        <h5>Free Champions for the Week</h5>
        <hr />
        <Slider {...this.setSliderSettings()}>{freeChampions}</Slider>
      </React.Fragment>
    );
  }
}

export default FreeChampionsSlider;
