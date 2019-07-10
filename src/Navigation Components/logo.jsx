import React, { Component } from "react";
import { Navbar, Col } from "react-bootstrap";

class Logo extends Component {
  render() {
    return (
      <Col id="logo_container" xs={2}>
        <Navbar.Brand href="#home">{this.props.logo}</Navbar.Brand>
      </Col>
    );
  }
}
export default Logo;
