import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./by-tier.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Iron from "../../Assets/Ranked Icons/Emblem_Iron.png";
import Bronze from "../../Assets/Ranked Icons/Emblem_Bronze.png";
import Silver from "../../Assets/Ranked Icons/Emblem_Silver.png";
import Gold from "../../Assets/Ranked Icons/Emblem_Gold.png";
import Platinum from "../../Assets/Ranked Icons/Emblem_Platinum.png";
import Diamond from "../../Assets/Ranked Icons/Emblem_Diamond.png";
import Master from "../../Assets/Ranked Icons/Emblem_Master.png";
import Grandmaster from "../../Assets/Ranked Icons/Emblem_Grandmaster.png";
import Challenger from "../../Assets/Ranked Icons/Emblem_Challenger.png";

//import FreeChampionsSlider from "../Free Champions Components/free-champions-slider";

class ByTier extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let arr = [
      { color: "#A9A5A4" },
      { color: "#7A4E38" },
      { color: "#99AFB4" },
      { color: "#FCE18D" },
      { color: "#8AB1AF" },
      { color: "#7685C5" },
      { color: "#9C71BE" },
      { color: "#BA7E85" },
      { color: "#FFFFE5" }
    ];
    // let ironStyle = {
    //   boxShadow: "6px 4px #A9A5A4"
    // };
    // let ironStyle = {
    //   boxShadow: "6px 4px #A9A5A4"
    // };

    return (
      <React.Fragment>
        <h5>By Tier</h5>
        <hr />
        <Container>
          <Row>
            <Col xs={3} onClick={this.props.handler}>
              <img src={Iron} />
              <h5 style={arr[0]}>Iron</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Bronze} />
              <h5 style={arr[1]}>Bronze</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Silver} />
              <h5 style={arr[2]}>Silver</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={Gold} />
              <h5 style={arr[3]}>Gold</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Platinum} />
              <h5 style={arr[4]}>Platinum</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Diamond} />
              <h5 style={arr[5]}>Diamond</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={Master} />
              <h5 style={arr[6]}>Master</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Grandmaster} />
              <h5 style={arr[7]}>Grandmaster</h5>
            </Col>
            <Col xs={1} />
            <Col xs={3}>
              <img src={Challenger} />
              <h5 style={arr[8]}>Challenger</h5>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ByTier;
