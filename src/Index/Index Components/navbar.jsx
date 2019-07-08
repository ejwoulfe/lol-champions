import React, { Component } from "react";
import SearchBarCollapse from "./search-bar-collapse";
import {
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Container,
  Collapse
} from "react-bootstrap";

class NavigationBar extends Component {
  state = {
    links: [
      { name: "Champions", extension: "/champions" },
      { name: "By Tier", extension: "/by-tier" }
    ],
    logo: "LoL Champions"
  };
  renderLinkLists() {
    const links = this.state.links;
    const mapOfLinks = links.map(link => (
      <Nav.Link
        key={link.name}
        className="nav-item ml-auto"
        href={link.extension}
      >
        {link.name}
      </Nav.Link>
    ));
    return mapOfLinks;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.state.logo}</Navbar.Brand>
          <SearchBarCollapse />
          <div id="list_container" className="ml-auto">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">{this.renderLinkLists()}</Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </React.Fragment>

      /* <Navbar className="navbar navbar-expand-lg">
          <Navbar.Brand className="navbar-brand col-sm-2" href="./index.html">
            {this.state.logo}
          </Navbar.Brand>
          <Form inline className="col-sm-6">
            <FormControl
              type="text"
              placeholder="Search for Champion"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto col-sm-4">
              <ul className="ml-auto">{this.renderLinkLists()}</ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */
    );
  }
}

export default NavigationBar;
