import React, { Component } from "react";
import { Navbar, Col, Nav } from "react-bootstrap";
import { championFetch } from "../Index/fetch";

class LinksList extends Component {
  render() {
    let style = {};
    const links = this.props.links;
    const mapOfLinks = links.map(link => (
      <Nav.Link
        key={link.name}
        className="nav-item ml-auto"
        // href={link.extension}
        onClick={championFetch()}
      >
        {link.name}
      </Nav.Link>
    ));
    return (
      <Col xs={4} id="links_container" style={style}>
        {mapOfLinks}
      </Col>
    );
  }
}
export default LinksList;
