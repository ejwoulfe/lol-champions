import React, { Component } from "react";
import Container from "react-bootstrap/Container";
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
  constructor() {
    super();
    this.state = {
      tierRanks: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={3}>
              <img src={Iron} />
              <h5>Iron</h5>
            </Col>
            <Col xs={3}>
              <img src={Bronze} />
              <h5>Bronze</h5>
            </Col>
            <Col xs={3}>
              <img src={Silver} />
              <h5>Silver</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={Gold} />
            </Col>
            <Col xs={3}>
              <img src={Platinum} />
            </Col>
            <Col xs={3}>
              <img src={Diamond} />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <img src={Master} />
            </Col>
            <Col xs={3}>
              <img src={Grandmaster} />
            </Col>
            <Col xs={3}>
              <img src={Challenger} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ByTier;
