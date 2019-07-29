import React, { Component } from "react";
import { Col, Nav } from "react-bootstrap";

class LinksList extends Component {
  render() {
    const links = this.props.links;
    const mapOfLinks = links.map(link => (
      <Nav.Link
        key={link.name}
        id={link.name}
        className="nav-item ml-auto"
        onClick={this.props.handlePage}
      >
        {link.name}
      </Nav.Link>
    ));
    return (
      <Col xs={4} id="links_container">
        {mapOfLinks}
      </Col>
    );
  }
}
export default LinksList;
