import React, { Component } from "react";

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
      <li key={link.name} className="nav-item">
        <a className="nav-link" href={link.extension}>
          {link.name}
        </a>
      </li>
    ));
    return mapOfLinks;
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="./index.html">
            {this.state.logo}
          </a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for Champion"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{this.renderLinkLists()}</ul>
            <button id="login_button">Login</button>
            <button id="sign_up_button">Sign Up</button>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
