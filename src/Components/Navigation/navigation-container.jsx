import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { proxyurl } from "../../variables";
import SearchBar from "./search-bar";
import Logo from "./logo";
import "./navigation.scss";

import { Navbar } from "react-bootstrap";
class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      logo: "LoL Champions",
      links: [{ name: "champions" }, { name: "by tier" }],
      championsList: [],
      clickedTier: false,
      clickedHome: false
    };
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    fetch(
      proxyurl +
      "http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/championFull.json"
    )
      .then(response => {
        response.json().then(result => {
          for (var champion in result.data) {
            let championObject = result.data[champion];
            this.setState({
              championsList: [...this.state.championsList, championObject]
            });
          }
        });
      })
      .catch(function (err) {
        window.alert(
          "Something went wrong fetching data. The service may be down. Try again later." +
          err
        );
      });
  }
  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem(
  //     "championsList",
  //     JSON.stringify(nextState.championsList)
  //   );
  // }
  componentDidUpdate() {
    if (this.state.clickedTier === true) {
      document
        .getElementById("by_tier_container")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
  changeState() {
    this.setState({ clickedTier: true });
  }
  render() {
    return (
      <div id="navigation">
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Logo logo={this.state.logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar list={this.state.championsList} />
            <Col id="links_container" className="col-sm-4 col-xs-6">
              <Link
                to="/list"
                id={this.state.links[0].name}
                className="nav-item ml-auto"
              >
                {this.state.links[0].name}
              </Link>
              <Link
                id={this.state.links[1].name}
                className="nav-item ml-auto"
                to="/"
                onClick={this.changeState}
              >
                {this.state.links[1].name}
              </Link>
            </Col>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
