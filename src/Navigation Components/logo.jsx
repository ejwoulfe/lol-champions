import React, { Component } from "react";
import { Navbar, Col, Nav } from "react-bootstrap";

class Logo extends Component {
  render() {
    return (
      <Col id="logo_container" xs={2}>
        <Navbar.Brand>
          <Nav.Link id="index" onClick={this.props.handlePage}>
            {this.props.logo}
          </Nav.Link>
        </Navbar.Brand>
      </Col>
    );
  }
}
export default Logo;
