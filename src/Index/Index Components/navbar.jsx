import React, { Component } from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

class NavigationBar extends Component {
  state = {
    links: [
      { name: "Champions", extension: "/champions" },
      { name: "Role Specific", extension: "/role_specific" }
    ],
    logo: "LoL Champions"
  };
  renderLinkLists() {
    const links = this.state.links;
    const mapOfLinks = links.map(link => (
      <Nav.Link key={link.name} className="nav-item" href={link.extension}>
        {link.name}
      </Nav.Link>
    ));
    return mapOfLinks;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg">
          <Navbar.Brand className="navbar-brand col-sm-2" href="./index.html">
            {this.state.logo}
          </Navbar.Brand>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search for Champion"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ul className="ml-auto">{this.renderLinkLists()}</ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
