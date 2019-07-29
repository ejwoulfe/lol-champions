import React, { Component } from "react";
import LinksList from "./links-list";
import SearchBar from "./search-bar";
import Logo from "./logo";
import "./navigation.scss";

import { Navbar } from "react-bootstrap";
class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      logo: "LoL Champions",
      links: [{ name: "champions" }, { name: "by tier" }]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Logo logo={this.state.logo} handlePage={this.props.handlePage} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar />
            <LinksList
              links={this.state.links}
              handlePage={this.props.handlePage}
            />
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
