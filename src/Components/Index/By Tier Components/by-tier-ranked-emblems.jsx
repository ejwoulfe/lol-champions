import React from "react";
import Container from "react-bootstrap/Container";
import "./by-tier.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import FreeChampionsSlider from "../Free Champions Components/free-champions-slider";

function ByTierRankedEmblems(props) {
  const listOfLowTiers = props.lowTiers.map(lowTier => (
    <Col
      md={4}
      sm={6}
      xs={12}
      onClick={props.handleTransition}
      key={lowTier.name}
      id={lowTier.name}
      className="ranked_emblem"
    >
      <img src={lowTier.image} alt={lowTier.name} />
      <h5 style={lowTier.style}>{lowTier.name}</h5>
    </Col>
  ));
  const listOfMidTiers = props.midTiers.map(midTier => (
    <Col
      className="ranked_emblem"
      id={midTier.name}
      md={4}
      sm={6}
      xs={12}
      onClick={props.handleTransition}
      key={midTier.name}
    >
      <img src={midTier.image} alt={midTier.name} />
      <h5 style={midTier.style}>{midTier.name}</h5>
    </Col>
  ));
  const listOfHighTiers = props.highTiers.map(highTier => (
    <Col
      className="ranked_emblem"
      id={highTier.name}
      md={4}
      sm={6}
      xs={12}
      onClick={props.handleTransition}
      key={highTier.name}
    >
      <img src={highTier.image} alt={highTier.name} />
      <h5 style={highTier.style}>{highTier.name}</h5>
    </Col>
  ));

  return (
    <React.Fragment>
      <h5>Most Picked Champions By Tier</h5>
      <hr />
      <Container>
        <Row>{listOfLowTiers}</Row>
        <Row>{listOfMidTiers}</Row>
        <Row>{listOfHighTiers}</Row>
      </Container>
    </React.Fragment>
  );
}
export default ByTierRankedEmblems;
