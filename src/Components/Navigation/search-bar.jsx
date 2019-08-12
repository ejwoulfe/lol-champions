import React, { Component } from "react";
import { Form, FormControl, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    matchingChampionsFound: []
  };
  handleSubmit(e) {
    e.preventDefault();
  }
  keyUp = e => {
    if ((e.keyCode > 64 && e.keyCode < 91) || e.keyCode === 13) {
      const letter = document.getElementById("search_bar_input").value;
      let word = letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();

      this.setState({
        searchTerm: word
      });
      let tempArray = [];
      this.props.list.forEach(function(championObject) {
        var x = championObject.id;
        if (x.match(word) !== null) {
          tempArray.push(championObject);
        }
      });
      this.setState({
        matchingChampionsFound: tempArray
      });
    }
  };

  render() {
    const listItems = this.state.matchingChampionsFound.map(champion => (
      <li key={champion.id}>
        <Link
          variant="link"
          key={champion.id + "list_item"}
          to={{
            pathname: "/champion/" + champion.name,
            state: { champion: champion }
          }}
        >
          <img
            src={
              "http://ddragon.leagueoflegends.com/cdn/9.10.1/img/champion/" +
              champion.id +
              ".png"
            }
            alt={champion.name}
          />{" "}
          {champion.name}
        </Link>
      </li>
    ));
    let width = {
      flex: 1
    };
    let border = {
      border: 0
    };

    return (
      <Col md={6} id="search_container">
        <Form
          inline
          style={width}
          id="bar_and_icon"
          onSubmit={this.handleSubmit}
        >
          <FormControl
            autoComplete="off"
            type="text"
            placeholder="Search for a Champion"
            className="mr-sm-2"
            style={(width, border)}
            id="search_bar_input"
            onKeyUp={this.keyUp}
          />
          <FontAwesomeIcon id="search_icon" icon={faSearch} />
          {/* <Button variant="outline-success">Search</Button> */}
          <div id="search_suggestions">
            <ul>{listItems}</ul>
          </div>
        </Form>
      </Col>
    );
  }
}
export default SearchBar;
