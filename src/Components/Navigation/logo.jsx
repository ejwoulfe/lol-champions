import React, { Component } from "react";
import { Navbar, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <Col id="logo_container" xs={2}>
        <Navbar.Brand>
          <Link id="index" to="/">
            {this.props.logo}
          </Link>
        </Navbar.Brand>
      </Col>
    );
  }
}
export default Logo;
